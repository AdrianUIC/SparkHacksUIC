import { pages } from '../constants'


const Navigation = (props) => (
  <nav className="w-screen items-center bg-teal-500 p-6 flex justify-between">
      <span className="font-semibold text-xl text-white mr-6 tracking-tight">Helping Hands</span>
    <div className="w-full block flex-grow flex lg:items-center lg:justify-end lg:w-auto flex-shrink-0">
      <div> {pages.map(p => (
        <a href="#" onClick={() => props.passedFunc(p.id)} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">{p.title}</a>
      ))}
      </div>
    </div>
  </nav>
);

export default Navigation;
