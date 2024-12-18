import {render,screen,RenderResult,fireEvent} from "@testing-library/react";
import {Input} from "./index";

describe("input",()=>{
    let renderResult:RenderResult

    beforeEach(()=>{
        renderResult = render(<Input id="username" label="Username" />)
    })

    afterEach(()=>{
        renderResult.unmount()
    })

    it("should empty in input on initial render",()=>{
        const inputText = "test input"
        const inputNode = screen.getByLabelText("Username") as HTMLInputElement

        fireEvent.change(inputNode,{target:{value:inputText}})
        expect(inputNode).toHaveValue(inputText)
    })
})