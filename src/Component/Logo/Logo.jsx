import logo from '../../assets/logo.png';
const Logo = () => {
    return (
        <div className='flex '>
          <img src={logo} alt="" />
          <h1 className='flex -ml-4   items-end text-3xl font-bold'>ZapShift</h1>
        </div>
    );
};

export default Logo;