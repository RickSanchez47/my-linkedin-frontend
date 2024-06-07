// pages/index.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobPostsPage = () => {
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    // Function to fetch job posts from API
    const fetchJobPosts = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await axios.get('http://localhost:8000/api/job-posts');
        // Set the job posts state with the data from the API response
        setJobPosts(response.data);
      } catch (error) {
        console.error('Error fetching job posts:', error);
      }
    };

    // Call the fetchJobPosts function when the component mounts
    fetchJobPosts();
  }, []);

  
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Job Posts</h1>
        {jobPosts.map(job => (
          <div key={job.id} className="bg-white rounded-md shadow-md p-6 mb-4">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.employer.name}</p>
            <p className="text-gray-600 mb-2">{job.salary}</p>
            <p className="text-gray-800">{job.description}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPostsPage;
