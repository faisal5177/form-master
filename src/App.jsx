
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa';
// import HookForm from './Components/HookForm/HookForm'
// import ReusableForm from './Components/ReusableForm/ReusableForm';
// import Refform from './Components/Refform/Refform'
// import StateFulForm from './Components/StateFulForm/StateFulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

//   const handleSingUpSubmit = data =>{
//     console.log('sing up data', data);
// }
//   const  handleUpdateProfile = data =>{
//     console.log('update profile', data);
//   }

  return (
    <>
    <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <Refform></Refform> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm 
      formTitle={`Sing Up`} 
      handleSubmit={handleSingUpSubmit}
      >
        <div>
          <h2>Sing Up</h2>
          <p>please sing up right now</p>
        </div> */}
      {/* </ReusableForm>
      <ReusableForm 
      formTitle={`Profile Update`} 
      handleSubmit={handleUpdateProfile} 
      submitBtnText = 'Update'
      >
        <div>
          <h2>Update profile</h2>
          <p>Always keep yer profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App;
