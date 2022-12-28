import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

console.log({Button});

describe('Button', () => {
	test('renders the Button component', () => {
		render(<Button label="Hello world!" />);
	});
});