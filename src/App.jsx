
import './App.css'
// import HookForm from './Components/HookForm/HookForm'
import ReusableForm from './Components/ReusableForm/ReusableForm';
// import Refform from './Components/Refform/Refform'
// import StateFulForm from './Components/StateFulForm/StateFulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  const handleSingUpSubmit = data =>{
    console.log('sing up data', data);
}
  const  handleUpdateProfile = data =>{
    console.log('update profile', data);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <Refform></Refform> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm 
      formTitle={`Sing Up`} 
      handleSubmit={handleSingUpSubmit}
      >
        <div>
          <h2>Sing Up</h2>
          <p>please sing up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm 
      formTitle={`Profile Update`} 
      handleSubmit={handleUpdateProfile} 
      submitBtnText = 'Update'
      ></ReusableForm>
    </>
  )
}

export default App;
