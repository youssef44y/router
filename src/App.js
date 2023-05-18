
import './App.css';
import  Profile  from './profil/Profile.js';
import myImg from './profil/eee.jpg'
import MyImg from './profil/MyImg'
function App() {
  const myName = "youssef"
  const myLastName = "ouni"
  const myBio=" I 23 years old I full stack developer I study in GoMyGode"
  const myProfession = "sports";
  const handleName=(a)=> alert (a)
   return (
    
    <div >
      
        <Profile name={myName} lastName={myLastName} bio={myBio} handleName={handleName} profession={myProfession}/>
        <MyImg>
          <img src= {myImg} alt='img'/>
        </MyImg>
      
    </div>
  );
}

export default App;
