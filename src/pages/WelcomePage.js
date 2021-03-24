import '../componentsCss/WelcomePage.css';
import svg from '../tts2.svg';
import NavBar from "../components/NavBar";
import GuestNavBar from "../components/GuestNavbar";
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
function WelcomePage(props) {

  const x = useSelector(s=>s.recordReducer.isLogin)
  return (
    <div>
       {x ? (
            <NavBar />
         ) : (
            <GuestNavBar/>
            )}
        <div className='WelcomContainer'>
                <div className='WelcomeCover'>
                    <img className='WelcomCoverPhoto' src={svg}alt='' />
                </div>
                <div className='WelcomContent'>
                  <h1>TTS</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis urna vel felis molestie vestibulum. Curabitur id euismod turpis. Nunc varius augue in augue pellentesque feugiat. Nam vulputate quam non eleifend aliquam. Aliquam vestibulum vulputate consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eu rutrum ligula. Duis posuere et nisi pretium consequat. Aliquam orci est, consectetur non auctor sed, porta quis nibh. Suspendisse vulputate quam venenatis volutpat viverra. Cras mattis, turpis in pharetra fringilla, dui sem condimentum dolor, sed sagittis augue eros sed nibh. Donec dictum, diam sed viverra hendrerit, turpis nisl accumsan sem, a sodales turpis risus a tellus. Ut condimentum aliquet tellus id porttitor.

                  Fusce eu efficitur turpis. Nullam efficitur pellentesque massa, eget ultricies tortor sagittis ut. Sed ut aliquam mauris, id tristique orci. Praesent tincidunt, massa at blandit pretium, odio lorem faucibus tellus, non mattis tellus tortor sit amet felis. Proin malesuada maximus auctor. Proin sit amet augue malesuada, malesuada felis eu, aliquet orci. Maecenas sed sapien sed dolor pulvinar maximus. Donec posuere lobortis diam, vitae consequat enim pretium varius. Ut nunc augue, tristique nec tristique vitae, sollicitudin nec sapien.

                  Fusce elementum enim nec sapien eleifend, id bibendum dui imperdiet. Curabitur non erat sagittis, sodales erat quis, faucibus augue. Ut sed dapibus eros. Integer varius diam quis sem suscipit, vitae aliquam turpis laoreet. Vivamus sagittis sem neque, vel tempor ipsum ullamcorper quis. In in laoreet massa. Donec interdum sapien accumsan erat tempor, et pharetra nisl tristique. Suspendisse ornare nulla eget ex dignissim tincidunt. Phasellus dui felis, ultricies scelerisque ante in, finibus molestie orci. Nunc eu lobortis arcu. Sed vitae placerat ipsum, varius aliquet turpis. Suspendisse convallis porta mi in auctor. Fusce imperdiet odio in odio tincidunt tempus. Phasellus velit neque, posuere nec mattis at, molestie in quam.

                  Vestibulum faucibus ipsum et euismod ornare. Praesent justo nulla, faucibus sit amet congue ac, sagittis ac lorem. Ut vitae odio cursus justo cursus viverra eget vel leo. Sed aliquet non ex et semper. Nulla vel nisi convallis, euismod elit in, ullamcorper arcu. Nunc euismod viverra commodo. In dolor felis, convallis quis lorem eget, sodales maximus ex. Donec sapien erat, efficitur sed massa vitae, dictum facilisis quam. Donec rhoncus ante id tellus ullamcorper, vel ullamcorper turpis dignissim. Etiam dapibus ex sagittis lorem tincidunt, vel volutpat felis feugiat. Nulla facilisi. Vivamus pellentesque nulla ac eros mattis porta. Phasellus velit nulla, aliquet nec imperdiet ut, lacinia id erat.</p>
                  <Link to='/main' className="WelcomeBtn">
                    <button >Get started</button>
                  </Link>
                </div>
        </div>
    </div>
  );
}
export default WelcomePage;
