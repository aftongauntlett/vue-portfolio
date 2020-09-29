import { mount } from '@vue/test-utils'
import Footer from "../src/components/Footer";


test('displays copyright', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(Footer, {

    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('2020 Copyright Afton Gauntlett')
})