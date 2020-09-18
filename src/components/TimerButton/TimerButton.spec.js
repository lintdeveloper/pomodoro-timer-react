import React from 'react';
import { shallow } from 'enzyme';
import TimerButton from "./TimerButton";

describe("TimerButton", () => {
    let container

    beforeEach(() => {
        container = shallow(
            <TimerButton
                buttonAction={jest.fn()}
                buttonValue={""}
            />
        )
    });

    it ("", () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    })
})