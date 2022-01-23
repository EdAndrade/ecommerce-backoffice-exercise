import { AsideMenu } from "../components/Menus/AsideMenu/AsideMenu";

export default function Layout( { children} ){

    return (
        <section>
            <AsideMenu/>
            <div className="page">
                { children }
            </div>
        </section>
    );
}