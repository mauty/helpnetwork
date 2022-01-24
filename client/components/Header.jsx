import { X } from 'react-feather';

const Header = (props) => {
  const { pageName } = props;
  
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">{pageName}</span>
      </div> 
      {/* <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <X />
        </button>
      </div> */}
    </div>
  );
}

export default Header;