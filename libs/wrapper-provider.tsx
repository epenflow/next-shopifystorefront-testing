'use client';
import React from 'react';

import client from '@/libs/apollo-client';
import { ApolloProvider } from '@apollo/client';

interface WrapperProviderProps {
	children: React.ReactNode;
}
const WrapperProvider: React.FC<WrapperProviderProps> = ({ children }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default WrapperProvider;
