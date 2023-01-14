import { Logo } from '@/components/Logo';
import { NavbarTwoColumns } from '@/components/NavbarTwoColumns';
import { NavMenu } from '@/components/NavMenu';
import { NavMenuItem } from '@/components/NavMenuItem';
import { Section } from '@/components/Section';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <rect x="3" y="12" width="6" height="8" rx="1"></rect>
              <rect x="9" y="8" width="6" height="12" rx="1"></rect>
              <rect x="15" y="4" width="6" height="16" rx="1"></rect>
              <path d="M4 20h14"></path>
            </svg>
          }
          name="World model increments"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts">Blog</NavMenuItem>
        <NavMenuItem href="https://github.com/antonosika">GitHub</NavMenuItem>
        <NavMenuItem href="https://twitter.com/antonosika">Twitter</NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/antonosika/">
          Linkedin
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
