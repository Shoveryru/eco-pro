const data = [
  {
    "id": 1,
    "title": "Плотницкое дело",
    "era": 1,
    "exclusion": [1, 3, 11, 20, 23, 31, 32],
    "iconName": "Carpentry_Icon.png"
  },
  {"id": 2, "title": "Композиты", "era": 3, "exclusion": [2, 3, 13, 15, 16], "iconName": "Composites_Icon.png"},
  {"id": 3, "title": "Заготовка леса", "era": 1, "exclusion": [1, 2, 3, 11, 18], "iconName": "Logging_Icon.png"},
  {"id": 4, "title": "Производство бумаги", "era": 2, "exclusion": [4, 32], "iconName": "PaperMilling_Icon.png"},
  {
    "id": 5,
    "title": "Продвинутая выпечка",
    "era": 3,
    "exclusion": [5, 9, 19, 21, 22],
    "iconName": "AdvancedBaking_Icon.png"
  },
  {
    "id": 6,
    "title": "Продвинутая кулинария",
    "era": 3,
    "exclusion": [6, 8, 9, 19, 21, 22],
    "iconName": "AdvancedCooking_Icon.png"
  },
  {"id": 7, "title": "Выпечка", "era": 2, "exclusion": [7, 19, 21, 22], "iconName": "Baking_Icon.png"},
  {
    "id": 8,
    "title": "Готовка на костре",
    "era": 1,
    "exclusion": [6, 8, 19, 22],
    "iconName": "CampfireCooking_Icon.png"
  },
  {"id": 9, "title": "Готовка", "era": 2, "exclusion": [5, 6, 9, 19, 22], "iconName": "Cooking_Icon.png"},
  {
    "id": 10,
    "title": "Передовая кулинария",
    "era": 3,
    "exclusion": [10, 19, 22, 23, 24],
    "iconName": "CuttingEdgeCooking_Icon.png"
  },
  {
    "id": 11,
    "title": "Основы инженерного дела",
    "era": 1,
    "exclusion": [1, 3, 11, 27, 28, 31, 32],
    "iconName": "BasicEngineering_Icon.png"
  },
  {"id": 12, "title": "Утилизатор", "era": 2, "exclusion": [12], "iconName": "Survivalist_Icon.png"},
  {"id": 13, "title": "Электроника", "era": 3, "exclusion": [2, 13, 15, 16, 31], "iconName": "Electronics_Icon.png"},
  {
    "id": 14,
    "title": "Промышленность",
    "era": 3,
    "exclusion": [13, 14, 15, 16, 30, 31],
    "iconName": "Industry_Icon.png"
  },
  {"id": 15, "title": "Механик", "era": 2, "exclusion": [2, 15, 18, 20, 21, 30, 31], "iconName": "Mechanics_Icon.png"},
  {
    "id": 16,
    "title": "Добыча нефти",
    "era": 3,
    "exclusion": [2, 18, 20, 21, 26, 31, 32],
    "iconName": "OilDrilling_Icon.png"
  },
  {"id": 17, "title": "Фермер", "era": 1, "exclusion": [17, 18, 19, 32], "iconName": "Farming_Icon.png"},
  {"id": 18, "title": "Удобрение", "era": 1, "exclusion": [3, 17, 18, 19, 22], "iconName": "Fertilizers_Icon.png"},
  {
    "id": 19,
    "title": "Собирательство",
    "era": 1,
    "exclusion": [5, 6, 7, 8, 9, 10, 18, 19, 21, 27, 32],
    "iconName": "Gathering_Icon.png"
  },
  {"id": 20, "title": "Пчеловод", "era": 2, "exclusion": [1, 20, 31], "iconName": "Survivalist_Icon.png"},
  {"id": 21, "title": "Мельничное дело", "era": 2, "exclusion": [5, 7, 10, 19, 21], "iconName": "Milling_Icon.png"},
  {
    "id": 22,
    "title": "Разделка животных",
    "era": 1,
    "exclusion": [5, 6, 7, 8, 9, 10, 18, 22, 23, 24, 32],
    "iconName": "Butchery_Icon.png"
  },
  {"id": 23, "title": "Животновод", "era": 2, "exclusion": [1, 10, 22, 23], "iconName": "Survivalist_Icon.png"},
  {"id": 24, "title": "Охотник", "era": 1, "exclusion": [10, 22, 24, 32], "iconName": "Hunting_Icon.png"},
  {
    "id": 25,
    "title": "Продвинутая каменная кладка",
    "era": 3,
    "exclusion": [25, 28, 30, 31],
    "iconName": "AdvancedMasonry_Icon.png"
  },
  {
    "id": 26,
    "title": "Обработка стекла",
    "era": 2,
    "exclusion": [16, 26, 28, 30],
    "iconName": "Glassworking_Icon.png"
  },
  {
    "id": 27,
    "title": "Каменная кладка",
    "era": 1,
    "exclusion": [11, 19, 27, 28, 29, 30],
    "iconName": "Masonry_Icon.png"
  },
  {
    "id": 28,
    "title": "Горное дело",
    "era": 1,
    "exclusion": [11, 25, 26, 27, 28, 29, 30, 31],
    "iconName": "Mining_Icon.png"
  },
  {"id": 29, "title": "Гончарство", "era": 2, "exclusion": [27, 28, 29], "iconName": "Pottery_Icon.png"},
  {
    "id": 30,
    "title": "Продвинутая выплавка",
    "era": 3,
    "exclusion": [14, 15, 16, 25, 26, 27, 28, 30, 31],
    "iconName": "AdvancedSmelting_Icon.png"
  },
  {
    "id": 31,
    "title": "Выплавка",
    "era": 2,
    "exclusion": [1, 11, 13, 14, 15, 16, 20, 28, 30, 31],
    "iconName": "Smelting_Icon.png"
  },
  {
    "id": 32,
    "title": "Работа с тканью",
    "era": 1,
    "exclusion": [1, 4, 11, 16, 17, 19, 22, 24, 32],
    "iconName": "Tailoring_Icon.png"
  }
];