import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const ButtonWithSpacing = ({ children, onClick }) => (
    <Box m={1} width={1}>
        <Button variant="contained" size="large" color="primary" fullWidth onClick={onClick}>
            {children}
        </Button>
    </Box>
);

export default ButtonWithSpacing;
