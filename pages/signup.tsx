import { useState } from 'react'
import { supabase } from '../lib/lib.supabaseClient'

export default function SignUp() {
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [message, setMessage] = useState(' ')

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            setMessage(error.message)
        } else {
            setMessage('회원가입 이메일이 전송되었습니다.')
        }
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>회원가입</h1>
            <form onSubmit={handleSignUp}>
                <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                /><br></br>
                <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                /><br></br>
                <button type="submit">회원가입</button>
            </form>
            <p>{message}</p>
        </div>
    )
}