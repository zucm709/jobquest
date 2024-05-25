import React from 'react'
import { Route,
         createBrowserRouter,
         createRoutesFromElements,
         RouterProvider 
        } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobPage from './pages/JobPage';
import AddJobs from './pages/AddJobs';
import NotFound from './pages/NotFound';
import JobsPage, { jobLoader } from './pages/Job\'sPage';
import EditJobPage from './pages/EditJobPage';



const App = () => {
  // <add new job>
  const addJob = async (newJob) => {
   const res = await fetch('/api/jobs',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(newJob)
   });
   return;
  }

  // <>Delete Job</>

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method:'DELETE'
     });
     return;
  }
  
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(job)
     });
     return;
  }
  const router = createBrowserRouter(
        createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
           <Route index element={<HomePage/>}/>
           <Route path='/jobs' element={<JobPage/>}/>
           <Route path='/jobs/:id' element={<JobsPage deleteJob={deleteJob}/>} loader={jobLoader}/>
           <Route path='/edit-jobs/:id' element={<EditJobPage updateSubmitJobs={updateJob}/>} loader={jobLoader}/>
           <Route path='/add-job' element={<AddJobs addSubmitJobs={addJob}/>} />
           <Route path='*' element={<NotFound/>}/>
        </Route>
      )   
          )
  return <RouterProvider router={router}/>
};

export default App

