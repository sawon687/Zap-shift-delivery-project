import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
     const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
const serviceCenter=useLoaderData()
const serviceRegion=serviceCenter.map(c=>c.region)

const singleserviceRegion=[...new Set(serviceRegion)]
// const sendRegions=watch('sendserRegion')
// expolre usememo usecallback
const sendRegions=useWatch({control, name:'sendRegions'})
const receverRegions=useWatch({control, name:'receverRigions'})
const districByRegion=(region)=>{
       const signleRegion=serviceCenter.filter(r=> r.region===region)
      
       const district=signleRegion.map(d=> d.district)
       
       return district
}




  const handleparcel=(data)=>{
    console.log(data)
    const isDocument=data.parcelType==='Document';
    const isSameDistric=data.senderDistric===data.receverDistric;
    const weight=parseFloat(data.parcelWeight)
    let cost=0;
    if(isDocument)
    {
        cost = isSameDistric?60:80;
    }
    else{
       if(weight <3)
       {
         cost =isSameDistric?110:150
       }
       else{ 
             const minCharge=isSameDistric?110:150
          const remainWeight=weight-3;
          const remainCost =isSameDistric? remainWeight * 40: remainWeight * 40 + 40;
          cost = minCharge + remainCost
       }
    }
    console.log('Parcel cost:', cost);
  }
    return (
        <div className='mx-auto bg-white  w-7xl rounded-2xl my-10 p-15'>
            <form onSubmit={handleSubmit(handleparcel)} >


               <div className='space-y-4 mb-5'>
                  <h1 className='text-4xl font-bold'>Send A Parcel</h1>
                <h2 className='font-bold text-xl'>Enter your parcel details</h2>
                 
               </div>
           
              <div className='  space-y-2  border-y-1  border-gray-300'>
                <div className='mt-5'>
             <label className="label"><input type="radio" name="radio-3" value={'Document'} className="radio radio-neutral " defaultChecked {...register('parcelType')} />Document</label>
                <label className="label"><input type="radio" name="radio-3" value={'Not-Document'} className="radio radio-neutral ml-7" {...register('parcelType')} />Not-Document</label>
                             </div>
                              {/* parcel name and whight */}
                         <div className='grid md:grid-cols-2 grid-cols-1 mb-5 gap-x-10'>
             <fieldset className="fieldset">
           <label className="label">Parcel Name</label>
          <input type="text" className="input w-full" placeholder="Parcel Name" {...register('parcelName')}/>
        </fieldset>
            <fieldset className="fieldset">
           <label className="label">Parcel Weight (KG)</label>
          <input type="number" className="input w-full" placeholder="parcel Weight (KG)" {...register('parcelWeight')} />
        </fieldset>
                         </div>
              </div>


              {/* user details */}
               <div className='grid  md:grid-cols-2 grid-cols-1 gap-10 mt-5'>
                {/* sender details */}
                 <div>
        <h1 className='font-bold mb-3'>Sender Details</h1>
       <fieldset className="fieldset">
        {/* sender name */}
          <label className="label">Sender Name</label>
          <input type="text" className="input w-full" placeholder="Sender Name" {...register('SenderName')} />
          {/* sender email */}
          <label className="label">Sender Email</label>
          <input type="email" className="input w-full" placeholder="Sender Email" {...register('senderEmail')} />
          {/* sender regions */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">Send Regions</legend>
  <select {...register('sendRegions')} defaultValue="Pick a Regions" className="select w-full" >
    <option disabled={true}>Pick a Regions</option>
    {
         singleserviceRegion.map(r=><option key={r} value={r}>{r}</option> )
    }
    
 
  </select>

</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Send Distric</legend>
  <select {...register('senderDistric')} defaultValue="Pick a Regions" className="select w-full">
    {
        districByRegion(sendRegions).map(d=> <option key={d} value={d}>{d}</option>)
    }
    <option disabled={true}>Pick a Regions</option>
    
  </select>
 <label className="label">Sender Address</label>
          <input type="text" className="input w-full" placeholder="Sender Address" {...register('SenderAddress')} />
</fieldset>

        </fieldset>
        </div>

        {/* recever details */}
         <div>
                    <h1 className='font-bold mb-3'>Receiver Details</h1>
                    <fieldset className="fieldset">
                        {/* Recever name */}
          <label className="label">Recever Name</label>
          <input type="text" className="input w-full" placeholder="Recever Name" {...register('receverName')} />
          {/* Recever email */}
          <label className="label">Recever Email</label>
          <input type="email" className="input w-full" placeholder="Recever Email" {...register('receverEmail')} />
         {/* Recever regions */}
   <fieldset className="fieldset">
  <legend className="fieldset-legend">Recever Regions</legend>
  <select {...register('receverRigions')} defaultValue="Pick a Regions" className="select w-full">
    <option disabled={true}>Pick a Regions</option>
     {
         singleserviceRegion.map(r=><option key={r} value={r}>{r}</option> )
    }
    
  </select>

</fieldset>

      {/* Recever district */}
   <fieldset className="fieldset">
  <legend className="fieldset-legend">Recever Regions</legend>
  <select defaultValue="Pick a Regions" className="select w-full">
    <option {...register('receverDistric')} disabled={true}>Pick a Regions</option>
     {
          districByRegion(receverRegions).map(d=><option key={d} value={d}>{d}</option> )
    }
    
  </select>

</fieldset>
    {/* Recever address */}
          <label className="label">Recever Address</label>
          <input type="text" className="input w-full" placeholder="Recever Address" {...register('receverAddress')} />

        </fieldset>
                 </div>
               </div>
               <button type='submit' className='btn'>submit</button>
            </form>
        </div>
    );
};

export default SendParcel;
