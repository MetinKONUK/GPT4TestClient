import { Button } from '@mui/material';
import ButtonIcon from '../../assets/right-floating-button-icon.png';

const FloatingButtonRight = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
            sx={{
                position: 'fixed',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                zIndex: 1000,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                minWidth: 60,
                height: 60,
                padding: 0,
                borderRadius: '50%',
                color: 'black',
                opacity: 0, // Initially invisible
                transition: 'opacity 0.3s', // Smooth transition for opacity
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                    opacity: 1, // Visible on hover
                },
            }}
        >
            <img
                src={ButtonIcon}
                style={{
                    width: '2rem', // Adjust as needed
                    height: 'auto',
                }}
            />
        </Button>
    );
};

export default FloatingButtonRight;
