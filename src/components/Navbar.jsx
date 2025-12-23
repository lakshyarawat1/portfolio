import dayjs from 'dayjs';
import { navIcons, navLinks } from '../constants';
import useWindowStore from '../store/window';

const Navbar = () => {

    const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
              <img src="/images/logo.svg" alt='logo' />
              <p className='font-semibold font-sans'>Lakshya's Portfolio</p>

              <ul>
                {navLinks.map(({id, name, type}) => (
                      <li key={id} onClick={() => openWindow(type)} className='tracking-wide'>
                          <p>{name}</p>
                      </li>
                  ))}
              </ul>
          </div>
          
          <div>
              <ul>
                  {
                      navIcons.map((icon) => (
                          <li key={icon.id}>
                              <img src={icon.img} className="icon-hover cursor-pointer hover:scale-130 transition" alt={`icon-${icon.id}`} />
                          </li>
                      ))
                  }
              </ul>
              <time>
                  {dayjs().format('ddd MMM D h:mm A')}
              </time>
          </div>
    </nav>
  );
}

export default Navbar