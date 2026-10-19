export interface MenuItemOptionItem {
	name: string;
	price?: string;
}

export interface MenuItemOption {
	title: string;
	items: MenuItemOptionItem[];
}

export interface MenuItem {
	description: string;
	price?: string;
	options?: MenuItemOption[];
}

export const MENU_ITEMS: Record<string, MenuItem[]> = {
	Appetizers: [
		{ description: 'Tako Yaki (6)', price: '$7.50' },
		{ description: 'Crispy Spring Roll (2)', price: '$3.50' },
		{ description: 'Crab Rangoon (6)', price: '$7.50' },
		{ description: 'Seaweed Salad', price: '$5.00' },
		{ description: 'Edamame', price: '$3.50' },
		{
			description: 'Soup Dumplings (4)',
			price: '$6.25',
			options: [{ title: 'Choose one:', items: [{ name: 'Chicken' }, { name: 'Pork' }] }],
		},
		{ description: 'Rainbow Dumplings - Pan Fried (5)', price: '$7.25' },
		{ description: 'Scallion Pancakes', price: '$6.25' },
		{ description: 'Szechuan Spicy Pork Dumplings (6)', price: '$7.25' },
		{
			description: 'Crispy Chicken Wings (6)',
			price: '$8.95',
			options: [
				{
					title: 'Sauces:',
					items: [{ name: 'Garlic' }, { name: 'Sweet Chili' }, { name: 'General Tso\'s' }, { name: 'Buffalo' }],
				},
			],
		},
		{ description: 'Shrimp Tempura (4)', price: '$7.99' },
	],
	'Tossed Noodles': [
		{
			description: 'Fresh noodles tossed with your choice of sauce and protein',
			price: '$12.50',
			options: [
				{
					title: 'Noodles:',
					items: [{ name: 'Knife Cut Noodles', price: ' ' }, { name: 'Hand Pulled Noodles' }, { name: 'Rice Noodles' }],
				},
				{
					title: 'Sauce:',
					items: [{ name: 'Classic Chili Sauce', price: ' ' }, { name: 'Soy Vinagrette', price: ' ' }],
				},
				{
					title: 'Protein:',
					items: [{ name: 'Shredded Chicken' }, { name: 'Ground Pork' }, { name: 'Marinated Beef', price: '+1.00' }, { name: 'Vegetable (Tofu Skin)' }, ],
				},
			],
		},
	],
	'Sesame Noodles': [
		{
			description: 'Chilled noodles with a creamy sesame sauce.  Served with cucumber, bean sprouts, carrots, and scallions.  Mild or spicy.',
			options: [
				{
					title: 'Protein:',
					items: [{ name: 'Shredded Chicken', price: '$12.50' }, { name: 'Ground Pork', price: '$12.50' }, { name: 'Beef', price: '$14.00' }, { name: 'Vegetable', price: '$12.50' }, ],
				}
			],
		},
		{
			description: 'Singapore Noodles',
			options: [
				{
					title: 'Protein:',
					items: [{ name: 'Chicken', price: '$12.50' }, { name: 'Beef', price: '$14.00' }, { name: 'Shrimp', price: '$14.00' }, ],
				}
			],
		},
		{ description: 'Zhajiang Noodles', price: '$12.95' }
	],
	Buns: [
		{ description: 'Chicken Bun', price: '$5.50' },
		{ description: 'Pork Bun', price: '$5.50' },
		{ description: 'Shrimp Tempura Bun', price: '$6.00' },
		{ description: 'Fried Chicken Bun', price: '$5.50' },
		{ description: 'Spicy Beef Bun', price: '$6.00' },
		{ description: 'Tofu Bun', price: '$5.50' },
		{ description: 'Pork Belly Bao Bun', price: '$6.00' },
		{ description: 'Any Two Buns', price: '$10.00' }
	],
	'Noodle Soups': [
		{ 
			description: 'Ramen', 
			options: [ 
				{ 
					title: 'Choose one:',
					items: [
						{ name: 'Classic Tonkotsu', price: '$13.99' }, 
						{ name: 'Spicy Tonkotsu', price: '$14.50' },
						{ name: 'Spicy Miso', price: '$14.50' }, 
						{ name: 'Shoyu', price: '$13.99' }
					]
				},
				{
					title: 'Choose protein:',
					items: [{ name: 'Chicken' }, { name: 'Pork' },{ name: 'Beef', price: '+$2.00' }, { name: 'Seafood', price: '+$3.00' }, { name: 'Vegetable' }],
				}
			],
		},
		{ 
			description: 'Taiwanesse Braised Beef Noodle Soup', 
			price: '$15.25'
		}
	],
	'Fried Rice': [
		{ description: 'Egg Fried Rice', price: '$10.00' },
		{ description: 'Chicken or Pork Fried Rice', price: '$11.50' },
		{ description: 'Vegetable Fried Rice', price: '$11.99' },
		{
			description: 'Curry Fried Rice',
			price: '$12.25',
			options: [{ title: 'Choose one:', items: [{ name: 'Chicken' }, { name: 'Shrimp' }] }],
		},
		{
			description: 'Spicy Fried Rice',
			price: '$12.25',
			options: [{ title: 'Choose one:', items: [{ name: 'Roast Pork' }, { name: 'Chicken' }] }],
		},
		{ description: 'Black Pepper Beef Fried Rice', price: '$14.75' },
	],
	Drinks: [
		{ 
			description: 'Bubble Tea',
			options: [
				{
					title: 'Flavors:',
					items: [
						{ name: 'Brown Sugar', price: '$6.95' }, 
						{ name: 'Strawberry', price: '$6.95' }, 
						{ name: 'Jasmine', price: '$6.95' },
						{ name: 'Taro', price: '$6.75' }, 
						{ name: 'Thai Tea', price: '$6.95' },
						{ name: 'Matcha', price: '$6.95' }, 
						{ name: 'Honeydew', price: '$6.95' }
					],
				},
				{
					title: 'Toppings (+ $0.99):',
					items: [ { name: 'Tapioca Pearls', price: ' ' }, { name: 'Strawberry Heart Jelly' }, { name: 'Lychee Jelly' }, { name: 'Strawberry Popping Pearls' }, { name: 'Passionfruit Popping Pearls' }],
				}
			],
		 },
		{ 
			description: 'Fruit Tea', 
			price: '$6.75',
			options: [ {
					title: 'Flavors:',
					items: [ { name: 'Strawberry Green Tea', price: ' ' }, { name: 'Passion Fruit Green Tea' }, { name: 'Lychee Green Tea' }, { name: 'Peach Green Tea' }, { name: 'Mango Green Tea' }],
				}
			],
		}
	],
	Combos: [
		{ 
			description: 'Wings and Fried Rice Combo',
			options: [
				{
					title: '6 Wings plus (choose one):',
					items: [
						{ name: 'Chicken or Pork Fried Rice', price: '$12.25' }, 
						{ name: 'Vegetable Fried Rice', price: '$15.50' },
						{ name: 'Shrimp Fried Rice', price: '$14.25' },
					],
				},
				{
					title: 'Optional Drink (+ $4.00):',
					items: [
						{ name: 'Any Bubble Tea' },
						{ name: 'Any Fruit Tea' }
					]
				}
			],
		},
		{ 
			description: 'Ramen and Appetizer Combo',
			options: [
				{
					title: 'Choose one:',
					items: [
						{ name: 'Chicken Shoyu Ramen', price: '$12.95' },
						{ name: 'Beef Shoyu Ramen', price: '$14.95' },
						{ name: 'Tonkotsu Ramen', price: '$14.95' },
						{ name: 'Pork Spicy Miso Ramen', price: '$13.95' },
						{ name: 'Vegetable Miso Ramen', price: '$12.95' },
						{ name: 'Taiwanese Beef Noodle', price: '$14.95' }			],
				},
				{
					title: 'Choose one:',
					items: [
						{ name: 'Crab Rangoon (4pcs)', price: '+$3.95' },
						{ name: 'Takoyaki (3pcs)', price: '+$3.95' }
					]
				},
				{
					title: 'Optional Drink (+ $4.00):',
					items: [
						{ name: 'Any Bubble Tea' },
						{ name: 'Any Fruit Tea' }
					]
				}
			],
		},
	],
};

// Display order, grouped into the rows used by the menu title layout
export const SUB_MENU_GROUPS: string[][] = [
	['Appetizers', 'Buns', 'Fried Rice'],
	['Tossed Noodles', 'Sesame Noodles'],
	['Noodle Soups', 'Drinks', 'Combos'],
];

export const SUB_MENU_NAMES: string[] = SUB_MENU_GROUPS.flat();
