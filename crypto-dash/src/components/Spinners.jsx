import { PacmanLoader } from 'react-spinners';

const override = {
    display: 'block',
    margin: '0 auto 50px auto',
    borderColor: 'red',
};

const Spinner = ({ color = 'cyan', size = '150px' }) => {
    return (
        <div>
            <PacmanLoader
                color={color}
                size={size}
                cssOverride={override}
                aria-label='Loading....'
            />
        </div>
    );
};

export default Spinner;