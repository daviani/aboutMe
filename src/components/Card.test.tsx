import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

describe("Card", () => {
    it('Checks for the presence of an href property with a dummy value', () => {
        // given
        const item = {
            url: 'http.my.url',
            img: 'http://my.img',
            title: 'Title',
            subTitle: 'Lorem ipsum dolor site amet',
        }

        // when
        const component = renderer.create(<Card url={item.url} img={item.img} title={item.title} subTitle={item.subTitle}/>)

        // then
        let tree = component.toJSON()
        expect(tree?.props.href).toBe(item.url)
        debugger
    });


} )

