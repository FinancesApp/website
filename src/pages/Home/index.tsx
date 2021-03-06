import React from "react";
import { useNavigate } from "react-router-dom";
import { MdCalculate } from "react-icons/md";

import * as C from "./styles";
import Navbar from "../../components/Navbar";
import ButtonAuth from "../../components/ButtonAuth";
import DashboardImage from "../../assets/dashboard.png";
import GroupBoxImage from "../../assets/group-box.png";
import TableItemsImage from "../../assets/table-items.png";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
	const navigate = useNavigate();

	return (
		<C.Container>
			<Navbar />
			<C.Header>
				<div className="content">
					<h1>O Serviço para Gerenciar suas Receitas e Despesas.</h1>
					<ButtonAuth title="Começar Agora" disabled={false} onClick={() => navigate("/dashboard")} />
				</div>
				<img src={DashboardImage} alt="Imagem de exemplo do painel." />
			</C.Header>
			<div className="separator"></div>
			<C.About>
				<div className="content">
					<h1>Quem Somos?</h1>
					<p>Somos um serviço que tem como objetivo principal, te ajudar a gerenciar suas despesas e receitas mensais. Fornecemos um painel para informar suas estatísticas monetárias.</p>
				</div>
				<MdCalculate />
			</C.About>
			<div className="separator"></div>
			<C.Exemple>
				<img src={GroupBoxImage} alt="Imagem de exemplo da Caixas de Valores." />
				<div className="content">
					<h1>Informações Rápidas</h1>
					<p>Tenha controle sobre o total de despesas e receitas do seu mês.</p>
				</div>
			</C.Exemple>
			<C.Exemple className="reverse">
				<div className="content">
					<h1>Organização</h1>
					<p>Veja detalhadamente cada item que é registrado de acordo com o valor, categoria, data e nota.</p>
				</div>
				<img className="shadow" src={TableItemsImage} alt="Imagem de exemplo da Caixas de Valores." />
			</C.Exemple>
			<div className="separator"></div>
			<Footer />
		</C.Container>
	);
};

export default Home;