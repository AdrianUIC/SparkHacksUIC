import { pages } from '../constants'

const Navigation = (props) => (
  <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">Helping Hands</span>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
      <div> {pages.map(p => (
        <a href="#" onClick={() => props.passedFunc(p.id)} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">{p.title}</a>
      ))}
      </div>
    </div>
  </nav>
);

export default Navigation;
