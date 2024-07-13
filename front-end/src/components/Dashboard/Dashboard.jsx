import Header from "../Header";
// TODO CREATION DU DASHBOARD
function Dashboard( {userName} ) {
  console.log("Dashboard userName:", userName )
  return (
    <>
   <div>
   <Header><p className=" italic 
    mobile:absolute mobile:top-0 mobile:left-0 mobile:ml-4 mobile:mt-12 mobile:text-4xl " style={{ color: '#8B7979' }}>{userName}</p></Header> 
      <h1>Bienvenue, {userName}!</h1>
      {/* Le reste du contenu du tableau de bord */}
    </div>
    </>
  )
}
export default Dashboard