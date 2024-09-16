"use client"
import React, { useState } from 'react'
import { HandCoins } from 'lucide-react';
import {createCampaign} from '@/context/index';
import checkIfImageExists from '../utils';
function page() {
  const [form,setForm]=useState({
    name:'',
    title:'',
    description:'',
    target:'',
    deadline:'',
    image:''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    checkIfImageExists(form.image,async(exists)=>{
      if (exists){
        await createCampaign({...form,target:eth_getStorageAt.utils.parseUnits(form.target,18)});
        console.log(form);
      }
      else{
        alert('provide Valid Image Link')
        setForm({
          ...form,image:''
        })
      }
    });

   
  };
  return (
    <div className='p-2 md:p-10'>
        <div className=' min-h-screen rounded-2xl p-2'>
            <div className="flex flex-col items-center ">
              <p className="text-6xl lg:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 py-4 sm:py-8">
                Start A Campaign
              </p>
            </div>


            <form 
        className=" p-8 rounded-lg shadow-md max-w-full w-full"
        onSubmit={handleSubmit}
      >
       
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-white bg-neutral-900 text-neutral-500 border-neutral-700"
              placeholder="Enter your name"
            />
          </div>

          {/* Title */}
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-white bg-neutral-900 text-neutral-500 border-neutral-700"
              placeholder="Campaign title"
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Story</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none  focus:border-white bg-neutral-900 text-neutral-500 border-neutral-700"
              placeholder="Write your Story"
              rows="6"
            />
          </div>

          <div className='col-span-2 h-[20vh] bg-neutral-400 rounded-2xl text-neutral-900 flex justify-center items-center'>
          <HandCoins size={50} className="text-neutral-900" />
          <div className='text-4xl font-bold'>YOU WILL GET 100% OF THE RAISED AMOUNT !
            </div>
          </div>

          {/* Target */}
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">Target Amount</label>
            <input
              type="number"
              name="target"
              value={form.target}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none  focus:border-white bg-neutral-900 text-neutral-500 border-neutral-700"
              placeholder="Target amount"
            />
          </div>

          {/* Deadline */}
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">Deadline</label>
            <input
              type="date"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none  focus:border-white bg-neutral-900 text-neutral-500 border-neutral-700"
            />
          </div>

          {/* Image */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Campaign Image</label>
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none  focus:border-white bg-neutral-900 text-neutral-500 border-neutral-700"
              placeholder="Image URL"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
        <button 
        type='submit'
        className="h-12 animate-shimmer items-center rounded-md border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:text-white ">
      Submit
        </button>
        </div>
      </form>


        </div>
        
    </div>
    
  )
}

export default page
