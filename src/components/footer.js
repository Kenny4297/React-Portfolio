import githubLogo from '../images/GithubIcon.png'
import linkedinLogo from '../images/linkedin-logo.png'

export default function Footer() {
    return (
        <div className='footer'>
            <a href="https://github.com/Kenny4297"  target="_blank" rel="noreferrer">
                <img src={githubLogo} className='github-logo logo' alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/kedgard-cordero/" target="_blank" rel="noreferrer">
                <img className='linkedin-logo logo' src={linkedinLogo}  alt="linked in" />
            </a>
        </div>
    )
}
