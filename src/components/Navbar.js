import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
export default class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.toggleNavMenu = this.toggleNavMenu.bind(this);
	}

	toggleNavMenu() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		let menuIcon;

		if (this.state.isOpen) {
			menuIcon = (
				<path
					fill-rule="evenodd"
					d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
				/>
			);
		} else {
			menuIcon = (
				<path
					fill-rule="evenodd"
					d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
				/>
			);
		}
		return (
			<header class="bg-white sm:flex sm:justify-between sm:px-4  sm:items-center sticky top-0 z-50">
				<header class="flex items-center justify-between px-4 sm:p-0 ">
					<div>
						<img src={logo} alt="logo" className='h-24 w-24'/>
					</div>
					<div class="sm:hidden">
						<button
							onClick={this.toggleNavMenu}
							type="button"
							class="text-gray-500 hover:text-white focus:text-white focus:outline-none"
						>
							<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
								{menuIcon}
							</svg>
						</button>
					</div>
				</header>

				<div class={this.state.isOpen ? 'px-2 pt-2 pb-4 block' : 'px-2 pt-2 pb-4 hidden sm:flex'}>
					<Link
						to="landing"
						class="mt-1 py-1 block text-black font-semibold rounded px-2 hover:text-saffron sm:mt-0 sm:ml-2"
					>
						Funding 
					</Link>
					<Link
						to="investors"
						class="mt-1 py-1 block text-black font-semibold rounded px-2 hover:text-saffron sm:mt-0 sm:ml-2"
					>
						Investors
					</Link>
					<Link
						to="footer"
						class="mt-1 py-1 block text-black font-semibold rounded px-2 hover:text-saffron sm:mt-0 sm:ml-2"
					>
						Resources
					</Link>
                   
                   
                    <button 
                    href="#"
                    class="mt-1 py-1 block text-white bg-black font-semibold rounded-xl px-2 hover:text-gray-600 sm:mt-0 sm:ml-2"
                    >
                        LogIn
                    </button>
				</div>
                
			</header>
		);
	}
}

