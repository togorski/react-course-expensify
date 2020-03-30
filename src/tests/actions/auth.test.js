import { login, logout } from "../../actions/auth"

const uid = "abcbd3434"

test("should setup login object", () => {
    const action = login(uid)
    expect(action).toEqual({
        type: "LOGIN",
        uid
    })
})

test("should setup logout object", () => {
    const action = logout()
    expect(action).toEqual({
        type: "LOGOUT"
    })
})