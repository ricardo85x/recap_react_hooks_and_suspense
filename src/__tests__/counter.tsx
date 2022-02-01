import { fireEvent, render } from "@testing-library/react"
import {Counter} from "../components/Counter"


afterEach(() => {
    window.localStorage.removeItem('count')
})

test('counter increments the count', () => {
    const {container} = render(<Counter />)
    const button = container.firstChild as ChildNode
    expect(button.textContent).toBe('0')
    fireEvent.click(button)
    expect(button.textContent).toBe('2')
})

test('reads and writes to localStorage', () => {
    window.localStorage.setItem('count', '3')
    const { container } = render(<Counter />)
    const button = container.firstChild as ChildNode
    expect(button.textContent).toBe('3')
    fireEvent.click(button)
    expect(button.textContent).toBe('5')
    expect(window.localStorage.getItem('count')).toBe('5')
})

