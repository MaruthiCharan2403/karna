import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';


const Exam = () => {
  const [extractedText, setExtractedText] = useState('');
  const [examName, setExamName] = useState('');
  const [examDuration, setExamDuration] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = function() {
        const typedarray = new Uint8Array(this.result);

        window.pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
          if (pdf.numPages > 5) {
            alert('Please select a PDF with a maximum of 5 pages.');
            return;
          }

          let textPromises = [];
          for (let i = 1; i <= pdf.numPages; i++) {
            textPromises.push(
              pdf.getPage(i).then(function(page) {
                return page.getTextContent().then(function(textContent) {
                  return textContent.items.map(item => item.str).join(' ');
                });
              })
            );
          }

          Promise.all(textPromises).then(function(pagesText) {
            const extractedText = pagesText.join('\n');
            setExtractedText(extractedText);
            console.log(extractedText); // You can also log it to the console
          });
        });
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
        const token = sessionStorage.getItem('token');
        const response = await axios.post('http://localhost:5000/api/exam/qgen', {
        examname: examName,
        examduration: examDuration,
        examtext: extractedText
      },
        {
            headers: {
                Authorization: `${token}`
            }
        }

    );

      console.log('Exam saved successfully:');
      console.log(response.data.exam);
      navigate(`/exam/${response.data.exam._id}`)
      // Reset form fields or show success message
    } catch (error) {
      console.error('Error saving exam:', error);
      // Handle error states or show error message
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-md border border-blue-800 bg-black p-8 text-center shadow-[5px_5px_50px_rgba(8,_112,_184,_0.7)] w-96 mt-10">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="examName" className="text-gray-400 font-semibold text-xs">Exam Name</label>
            <input
              type="text"
              id="examName"
              name="examName"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
              placeholder="Enter exam name"
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="examDuration" className="text-gray-400 font-semibold text-xs">Exam Duration (minutes)</label>
            <select
              id="examDuration"
              name="examDuration"
              required
              className="w-full px-4 py-3 rounded-lg bg-black border-2 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
              value={examDuration}
              onChange={(e) => setExamDuration(e.target.value)}
            >
              <option value="">Select Exam Duration</option>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="fileInput" className="text-gray-400 font-semibold text-xs">Upload PDF (max 5 pages)</label>
            <input
              type="file"
              id="fileInput"
              name="fileInput"
              accept=".pdf"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
              onChange={handleFileChange}
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-3 hover:bg-black border-2 border-gray-700 hover:text-white font-semibold rounded-lg transition duration-300 bg-white hover:border-white focus:outline-none focus:bg-black focus:text-center focus:border-transparent focus:ring-2 focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      {loading && <Loader msg={"creating questions for you!"}/>}
    </div>
  );
};

export default Exam;
