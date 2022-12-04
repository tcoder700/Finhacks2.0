
import { SocialIcon } from 'react-social-icons';

export default function Footer() {

    return (
        <div className="">
         <div className="text-center py-12">This is the Footer</div>
<div className="flex items-end place-content-end gap-2 px-4">
    <SocialIcon url="https://twitter.com" />
    <SocialIcon url="https://instagram.com" />
    <SocialIcon url="https://linkedin.com" />
</div>
        </div>
    );
}
