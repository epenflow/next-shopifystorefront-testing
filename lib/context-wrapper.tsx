'use client';
import client from '@/lib/apollo-client';
import { ApolloProvider } from '@apollo/client';
import React from 'react';

interface ContextWrapperProps {
	children: React.ReactNode;
}

export function ContextWrapper({ children }: ContextWrapperProps) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
