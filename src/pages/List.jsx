import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const List = () => {
	return (
		<div>
			list 頁面
			<Menus1 />
			<Container />
		</div>
	);
};

const Container = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

const Menus1 = () => {
	const navigate = useNavigate();

	const onChange = (path) => {
		navigate(path);
	};

	return (
		<>
			<Tabs
				items={[
					{
						path: "/list/child1",
						Icon: AppleOutlined,
					},
					{
						path: "/list/child2",
						Icon: AndroidOutlined,
					},
				].map((Item, i) => {
					return {
						label: (
							<span>
								<Item.Icon />
								Tab {i + 1}
							</span>
						),
						key: Item.path,
						children: () => <div />,
					};
				})}
				onChange={onChange}
			/>
		</>
	);
};

export default List;
