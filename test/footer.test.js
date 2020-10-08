import { mount } from '@vue/test-utils'
import Footer from "../src/components/Footer";


test('displays copyright', () => {
    const wrapper = mount(Footer, {

    })

    expect(wrapper.text()).toContain('2020 Copyright Afton Gauntlett')
})