import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExampleWorkModal from '../js/example-work-modal';

configure({ adapter: new Adapter() });

const myExample = {
    title: "CROSS-PLATFORM APP",
    href: "https://play.google.com/store/apps/details?id=uk.co.firstorion.android.tpsprotect&hl=en",
    desc: `TPS Protect allows users in the UK to divert nuisance calls to voicemail. 
            I developed the reporting flow of the application using Ionic Frameork based on designs 
            provided by a graphic designer in consultation with the client. The reporting flow has some 
            differences between the two platforms due to the differences in native capability between 
            iOS and Android.`,
    image: {
        desc: "Cross Platform App",
        src: "images/tps-form.png",
        comment: "",
    },
};
describe("ExampleWorkModal component", () => {
    let component = shallow(<ExampleWorkModal example={myExample} 
        open={false} />);
    let openComponent = shallow(<ExampleWorkModal example={myExample} 
        open={true} />);
    let anchors = component.find("a");

    it("Should contain a single 'a' element'", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
        expect(anchors.getElement().props.href).toEqual(myExample.href);
    });

    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--close"));
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open"));
    });
});