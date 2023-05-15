import { IconBrandGithub, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandYoutube />} url="https://www.youtube.com/@cod3r" />
            <RedeSocial icone={<IconBrandLinkedin />} url="https://br.linkedin.com/in/juliano-moser-de-jesus-883baa256" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/julianomoser" />
        </div>
    )
}