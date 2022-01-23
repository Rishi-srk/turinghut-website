import React from 'react'
const colors ={
  Pupil : "text-green-600",
  Master : "text-amber-400",
  Grandmaster:"text-red-500",
  Expert : "text-blue-700",
  Specialist : "text-[#66CDAA]",
  CandidateMaster:"text-fuchsia-600"


}

export default function HallOfFameTableComponent({ person:{name,handle,handleLink,highestRating,level}}) {
  return (    
<tr>
  {name? <td className='px-1 py-0 sm:px-5 sm:py-1 border border-white border-slate-100 text-center text-white'>{name}</td>:null}

  

  { colors[level] ? <td className={`sm:px-5 sm:py-1 border border-white border-slate-100 text-center font-semibold ${colors[level]}`} >
    <a  href={handleLink}> {handle} </a>
    </td> : <td className='sm:px-5 sm:py-1 border border-white border-slate-100 text-center text-white'><a  href={handleLink}> {handle} </a></td>}

    { highestRating? <td className='sm:px-5 sm:py-1 border border-white border-slate-100 text-center text-white'>{highestRating}</td>:null}
  
  { 
  colors[level] ? <td className={`sm:px-3 sm:py-1 md:px-5 md:py-1 border border-white border-slate-100 text-center font-semibold ${colors[level]}`}>{level}</td>:
  <td className='sm:px-5 sm:py-1 border border-white border-slate-100 text-center text-white flex flex-row'>{level}

    <svg id="Layer_1" className='w-12 -m-3 ' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <path class="cls-2" d="M86.12835,56.35634a8.56874,8.56874,0,0,0-1.659-.25249c-3.76914-.30669-7.52019-.63126-11.2892-.82962a1.52678,1.52678,0,0,1-1.56894-1.19017c-1.49679-3.82313-3.02962-7.64634-4.56259-11.46961a2.85242,2.85242,0,0,0-2.83133-1.98368,3.024,3.024,0,0,0-2.93952,1.85754,9.30656,9.30656,0,0,0-.41474.97379Q58.672,48.791,56.48083,54.12c-.21638.52307-.41474.88375-1.082.91973-4.29207.25256-8.58408.559-12.87616.82962a3.0665,3.0665,0,0,0-2.84935,2.8673c-.10819,1.62307.86553,2.54286,1.94764,3.42648,2.9215,2.45256,5.8249,4.9232,8.74633,7.37589a1.16517,1.16517,0,0,1,.43283,1.37044c-1.082,4.11173-2.11,8.24149-3.1559,12.37124a3.02762,3.02762,0,0,0,2.20013,3.751,3.87626,3.87626,0,0,0,3.02969-.63113c3.26409-2.07392,6.60033-4.07569,9.86456-6.16757a1.5741,1.5741,0,0,1,1.98368-.018c3.3903,2.20006,6.83473,4.34607,10.27923,6.51016a3.15109,3.15109,0,0,0,4.90518-3.51658c-.91979-3.78709-1.82143-7.57425-2.81331-11.36128a1.99547,1.99547,0,0,1,.7574-2.34436c3.11993-2.47064,6.14961-5.04948,9.23343-7.59227a2.76856,2.76856,0,0,0,1.24423-2.38047A3.06548,3.06548,0,0,0,86.12835,56.35634Z"/></svg>
 
   </td>
   }
  
  
</tr>
    
  )
}

