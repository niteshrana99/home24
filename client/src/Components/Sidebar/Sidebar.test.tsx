import React from 'react';
import { fireEvent, render } from "@testing-library/react";
import Sidebar from ".";
import { BrowserRouter, useLocation } from 'react-router-dom';

describe('SideBar Component', () => {
    it('Render Sidebar Component', () => {
        const props = {
            childrenCategories: [
                {
                    name: 'test',
                    urlPath: '/test'
                }
            ]
        }
        const { getByText } = render(
            <BrowserRouter>
                <Sidebar {...props} />
            </BrowserRouter>
        );

        const linkElement = getByText(/Kategorien/i);
        expect(linkElement).toBeInTheDocument();

    });

    it('Render the list elements as per data provided', () => {
        const props = {
            childrenCategories: [
                {
                    name: 'test',
                    urlPath: '/test'
                },
                {
                    name: 'test1',
                    urlPath: '/test1'
                }
            ]
        }
        const { container } = render(
            <BrowserRouter>
                <Sidebar {...props} />
            </BrowserRouter>
        );

        const listElements : NodeListOf<HTMLLIElement> = container.querySelectorAll('li');
        expect(listElements.length).toEqual(2);
    });

    it('Should call clickHandler of list if clickhandler is present in props', () => {
        const props = {
            childrenCategories: [
                {
                    name: 'test',
                    urlPath: '/test'
                }
            ],
            onMenuClick: jest.fn()
        }
        const { container } = render(
            <BrowserRouter>
                <Sidebar {...props} />
            </BrowserRouter>
        );

        const listElements : HTMLLIElement | null = container.querySelector('li');
        if(listElements) {
            fireEvent.click(listElements);
            expect(props.onMenuClick).toHaveBeenCalledTimes(1)
        }
    });

})