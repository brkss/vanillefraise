-- MySQL dump 10.13  Distrib 8.0.28, for macos12.1 (arm64)
--
-- Host: localhost    Database: opencc
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activities` (
  `id` varchar(36) NOT NULL,
  `feedback` varchar(255) DEFAULT NULL,
  `calories` int DEFAULT NULL,
  `categoryId` varchar(36) DEFAULT NULL,
  `userId` varchar(36) DEFAULT NULL,
  `duration` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  KEY `FK_da47c633d8bb7ee8ca9009788d4` (`categoryId`),
  KEY `FK_5a2cfe6f705df945b20c1b22c71` (`userId`),
  CONSTRAINT `FK_5a2cfe6f705df945b20c1b22c71` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_da47c633d8bb7ee8ca9009788d4` FOREIGN KEY (`categoryId`) REFERENCES `activity_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activities`
--

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` VALUES ('045ffe7e-4058-4ca5-a1ae-72910e193e5d','Low',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:6','2022-03-07 17:04:16.257913'),('07b1543d-5b01-4bdd-8683-a13a9306e946','Low',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:6','2022-03-07 17:00:23.129305'),('07f1d482-7cff-40f6-80cc-8cd10de22d7d','Normal',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:18','2022-03-07 16:50:14.871978'),('0aadd506-1e82-4924-b0cf-54c1174ef268','Low',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:6','2022-03-07 17:01:57.440014'),('0fc04659-05f1-4168-be43-6da29b9dedb3','Normal',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:18','2022-03-07 16:14:42.609619'),('24119063-be18-4e4a-948a-01f43b3fa938','Normal',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:18','2022-03-07 16:17:54.329005'),('3044d413-51bb-41e1-aa1a-ebbd217b7f80','Normal',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:18','2022-03-07 16:14:42.567458'),('31a9e474-67df-470e-8994-7f012a9dbe26','Intense',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:15','2022-03-07 15:57:48.070041'),('37281df5-5d72-4302-bd76-97eabc145233','Low',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:1','2022-03-07 16:55:52.904698'),('56c80eb8-c578-423c-ae38-170ae3bed824','Intense',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:1','2022-03-07 17:09:24.542013'),('58ee9c6f-d61e-409f-b454-013e188e11ad','Normal',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:18','2022-03-07 16:14:42.208711'),('62699b85-3746-4f2e-a213-877ee0588096','Low',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:6','2022-03-07 17:02:12.553322'),('62b98a48-4706-41a5-a285-86719538a5fe','Intense',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:1','2022-03-07 17:04:37.819277'),('74bb348e-8f69-4eab-b443-7ad869654328','Low',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:1','2022-03-07 16:58:50.810449'),('831af193-4f63-451a-a07b-2702985edd7c','Normal',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:18','2022-03-07 16:18:17.569566'),('86572cdc-0570-4737-9f1a-12d0d0e2dddf','Normal',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:18','2022-03-07 16:12:55.155502'),('914d7e74-8174-4dc6-a290-8c79223d7006','Normal',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:18','2022-03-07 16:18:00.427534'),('94d3cdd6-ef85-441f-a1a6-384237fdcf93','Normal',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:18','2022-03-07 16:17:44.358427'),('974df519-e613-4dff-8fc8-901b7c6e0ea6','Intense',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:15','2022-03-07 15:57:48.070041'),('9da8000d-dd36-4626-b6dc-e444c42bedd1','Low',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:1','2022-03-07 16:52:08.846546'),('c88725d6-56af-4cd3-a270-b25d12ed7e0e','Strong',304,'692b3266-b411-40e3-b144-e75d2005a92a','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','1:40:02','2022-03-07 15:57:48.070041'),('cc121e6b-cbe1-4032-9288-26a27efe5fb8','Normal',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:18','2022-03-07 16:14:41.631726'),('e94d7141-41f4-4126-8921-b3f566e0f9dd','Normal',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:18','2022-03-07 16:15:39.486747'),('f1872359-7fe1-4f20-bf02-9ae15c5f8774','Low',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:6','2022-03-07 17:01:05.131740'),('fbaceef2-3a43-4754-aaea-0777e47189dc','Low',0,'83a7f55a-110f-4077-89be-133e4d2cb9ff','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','0:0:1','2022-03-07 16:55:29.617725');
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activity_categories`
--

DROP TABLE IF EXISTS `activity_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity_categories` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_categories`
--

LOCK TABLES `activity_categories` WRITE;
/*!40000 ALTER TABLE `activity_categories` DISABLE KEYS */;
INSERT INTO `activity_categories` VALUES ('0fd61a7d-6aa8-4698-ad36-380f2480f4d8','Cycling','🚴‍♂️'),('42ee7671-df10-4a7a-8144-5fa6ac185423','Cardio','🏋️‍♀️'),('626cfed9-5b82-4a42-881e-e815177d64f4','BasketBall','🏀'),('692b3266-b411-40e3-b144-e75d2005a92a','Yoga','🧘‍♀️'),('83a7f55a-110f-4077-89be-133e4d2cb9ff','Tennis','🎾'),('87b39370-83bd-4b86-aa67-845897370206','Run','🏃‍♀️'),('b865fe22-6cec-492d-9a97-9525479b6c42','Judo','🥋'),('b8781470-696f-47af-bd11-c4fe742cfc72','Boxing','🥊'),('d2ba1e5e-078a-45d1-ad54-415b4bbf838c','Swiming','🏊‍♀️');
/*!40000 ALTER TABLE `activity_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cooked_recipe`
--

DROP TABLE IF EXISTS `cooked_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cooked_recipe` (
  `id` varchar(36) NOT NULL,
  `recipeId` varchar(36) DEFAULT NULL,
  `userId` varchar(36) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  KEY `FK_17600d06fd7fc32c611fa975f29` (`recipeId`),
  KEY `FK_5af9ce17d58e46d8f42a750e7bd` (`userId`),
  CONSTRAINT `FK_17600d06fd7fc32c611fa975f29` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_5af9ce17d58e46d8f42a750e7bd` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cooked_recipe`
--

LOCK TABLES `cooked_recipe` WRITE;
/*!40000 ALTER TABLE `cooked_recipe` DISABLE KEYS */;
INSERT INTO `cooked_recipe` VALUES ('06ac9519-19dd-43b4-a985-9d48581db87f','3cd3f061-f3bc-4042-84c6-bb5f13722996','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 17:10:00.997617'),('2a17c78a-c315-4e61-881b-c2230400308c','ce7c42d8-f557-42e1-8e53-d9925bcafd3b','788d0c7c-d4d5-4f04-a9c9-0099c658a3ba','2022-03-10 20:16:16.055116'),('383ea6dd-4572-40ff-aa97-dc33aaea43df','ce7c42d8-f557-42e1-8e53-d9925bcafd3b','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:58:28.669900'),('3938d7fa-90f4-42bc-94ce-fe91dc67122a','3cd3f061-f3bc-4042-84c6-bb5f13722996','788d0c7c-d4d5-4f04-a9c9-0099c658a3ba','2022-03-09 20:41:39.337068'),('4a244ebd-b7ea-4918-b287-8281e8855313','ce7c42d8-f557-42e1-8e53-d9925bcafd3b','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:58:28.669900'),('99f820e0-f3fd-416f-accf-a1bf06245391','3cd3f061-f3bc-4042-84c6-bb5f13722996','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:58:28.669900');
/*!40000 ALTER TABLE `cooked_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `early_access_request`
--

DROP TABLE IF EXISTS `early_access_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `early_access_request` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(36) DEFAULT NULL,
  `service` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b544ea999d1618dede3962a85c6` (`userId`),
  CONSTRAINT `FK_b544ea999d1618dede3962a85c6` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `early_access_request`
--

LOCK TABLES `early_access_request` WRITE;
/*!40000 ALTER TABLE `early_access_request` DISABLE KEYS */;
INSERT INTO `early_access_request` VALUES ('dbec8fad-4423-4ca9-a3fa-4914876b5e65','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','MENTAL_HEALTH');
/*!40000 ALTER TABLE `early_access_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredients` (
  `id` varchar(36) NOT NULL,
  `raw` varchar(255) NOT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `ingredients` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `recipeId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_f20a9542c7a02105fa40a08d95b` (`recipeId`),
  CONSTRAINT `FK_f20a9542c7a02105fa40a08d95b` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES ('019e0c9d-0643-431b-8869-075ea95b59a4','1 teaspoon horseradish','teaspoon',1,'horseradish','2022-03-06 02:44:19.119947','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('074f94c6-10aa-41eb-aff9-99b100f37e4e','2 carrots','undefined',2,' carrots','2022-03-06 00:56:49.847070','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('11344631-15f1-42e4-87e7-2f2cc10837b7','1 Tablespoon capers','Tablespoon',1,'capers','2022-03-06 02:44:19.100452','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('14840017-4fd3-4c8c-bcb5-9fa3fc9b4f55','2 tbsp extra-virgin olive oil','tbsp',2,' extra-virgin olive oil','2022-03-06 00:56:49.859837','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('14f0dc7b-7fa3-4cdd-9b30-717661810aea','1 tsp ground coriander seeds','tsp',1,' ground coriander seeds','2022-03-06 00:56:49.864968','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('19b9f885-6fe0-46ad-9c09-0a403e084155','½ tsp black pepper','tsp',1,' black pepper','2022-03-06 00:56:49.881657','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('26d94324-d544-4543-8da1-b44c4c1152a6','½ tsp ground ginger','tsp',1,' ground ginger','2022-03-06 00:56:49.872810','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('2a1d47f4-46f3-4821-960a-39cac5a3f7d6','1 small garlic clove','undefined',1,'small garlic clove','2022-03-06 02:44:19.115390','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('2dd331bb-c037-4ccf-9352-45e8cb5b712e','100 g kale','g',100,' kale','2022-03-06 00:56:49.857797','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('3e822e8b-e726-4b7c-93e7-b6bbfc6642f7','½ teaspoon dijon mustard','teaspoon',1,'dijon mustard','2022-03-06 02:44:19.110930','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('3fdc151f-6132-4680-9f40-56f1c4d4f335','1 kg sweet potatoes','kg',1,' sweet potatoes','2022-03-06 00:56:49.849324','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('3ff92e70-c7fb-4820-9b45-2f17e3a985ed','400 g canned chopped tomatoes','g',400,' canned chopped tomatoes','2022-03-06 00:56:49.888756','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('4069a399-745c-4d57-8b62-c7e191f6fb05','1 tsp turmeric','tsp',1,' turmeric','2022-03-06 00:56:49.870415','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('41ce7384-67e1-429f-a391-6989a2f6dc40','1 yellow bell pepper','undefined',1,' yellow bell pepper','2022-03-06 00:56:49.851965','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('49a8463c-3f08-429c-a955-01e6024a6d26','salt to taste','undefined',NULL,NULL,'2022-03-06 00:56:49.896971','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('5d8e0658-6064-49a8-9ea9-609f7c5ee36d','1 bulb small fennel','undefined',1,'bulb small fennel','2022-03-06 00:56:49.854662','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('5e493bea-0f24-45cc-bb9d-28f9c736a54d','1 tsp cumin','tsp',1,' cumin','2022-03-06 00:56:49.863233','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('5ef4fe16-563d-4731-95d8-921f71f32ac3','1 onion','undefined',1,' onion','2022-03-06 00:56:49.843487','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('6a448fc8-9d0f-4a66-80c6-10b476b55ef5','340 g quinoa','g',340,' quinoa','2022-03-06 00:56:49.890942','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('836ba995-9e4a-4a15-888d-58b5c30ee302','1/4 cup mayonnaise','cup',0,'mayonnaise','2022-03-06 02:44:19.093477','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('91cb3da8-4348-4eef-b0af-52c5ce94c82d','1/4 cup plain Greek yogurt or sour cream','cup',0,'plain Greek yogurt or sour cream','2022-03-06 02:44:19.096521','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('92032cc4-e04b-48d2-aca6-b1671fcce8f2','1 tsp apple cider vinegar (optional)','tsp',1,' apple cider vinegar (optional)','2022-03-06 00:56:49.893732','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('9274adda-db10-47ec-a539-e3a7abcb29e3','1 tsp ground paprika','tsp',1,' ground paprika','2022-03-06 00:56:49.861467','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('a1b5cc50-b5a4-4f73-864e-c9055f44aadd','480 g chickpeas (drained)','g',480,' chickpeas (drained)','2022-03-06 00:56:49.840980','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('adf35bcf-e551-43f0-bbc8-3928e8a2545e','Salt and pepper','undefined',NULL,NULL,'2022-03-06 02:44:19.125136','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('adf6aa2d-d93e-4188-9caf-4c7dc1db6c8d','¼ tsp cayenne pepper','tsp',0,' cayenne pepper','2022-03-06 00:56:49.883663','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('b3a23eb3-cb9f-452a-b42c-ac3a99abe99a','750 ml water','ml',750,' water','2022-03-06 00:56:49.885454','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('b45117fd-902b-406e-803f-97423f1a3df4','½ tsp ground cinnamon','tsp',1,' ground cinnamon','2022-03-06 00:56:49.874873','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('c9cb6f45-73b1-44a4-9e64-bd03eb61c818','30 g fresh herbs (mint, parsley, or cilantro) for serving','g',30,' fresh herbs (mint, parsley, or cilantro) for serving','2022-03-06 00:56:49.895233','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('cadbbb2d-9401-4b66-bc89-9df953554b69','1/2 of a small lemon','undefined',1,'a small lemon','2022-03-06 02:44:19.118042','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('cefcac2b-b1e5-48de-80f3-128072248bc5','½ tsp sea salt','tsp',1,' sea salt','2022-03-06 00:56:49.879888','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('d1a44bda-da4e-473d-a87f-174c26a18697','1 lemon (juice, divided)','undefined',1,' lemon (juice, divided)','2022-03-06 00:56:49.892365','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('dcc51cda-4558-4167-a324-23ee2f9309f8','3 cloves garlic','undefined',3,'cloves garlic','2022-03-06 00:56:49.845141','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('dfc3cad2-c5d5-4c40-a343-6241d781acba','1 Tablespoon dill pickles','Tablespoon',1,'dill pickles','2022-03-06 02:44:19.102445','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('e64d281b-dc55-40d8-ba67-50a5bb60fc65','½ teaspoon dried dill weed','teaspoon',1,'dried dill weed','2022-03-06 02:44:19.104466','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('e8557fef-f0f4-41b6-ab64-b86fbc96bfd0','1/4 teaspoon Worcestershire sauce','teaspoon',0,'Worcestershire sauce','2022-03-06 02:44:19.112906','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('eb1c380e-2b73-4e93-9c1d-036040c2a2c1','2 tbsp homemade vegetable stock concentrate','tbsp',2,' homemade vegetable stock concentrate','2022-03-06 00:56:49.886877','ce7c42d8-f557-42e1-8e53-d9925bcafd3b');
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instructions`
--

DROP TABLE IF EXISTS `instructions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instructions` (
  `id` varchar(36) NOT NULL,
  `raw` text NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `recipeId` varchar(36) DEFAULT NULL,
  `index` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_412eec8482892c972e1ff29ce24` (`recipeId`),
  CONSTRAINT `FK_412eec8482892c972e1ff29ce24` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instructions`
--

LOCK TABLES `instructions` WRITE;
/*!40000 ALTER TABLE `instructions` DISABLE KEYS */;
INSERT INTO `instructions` VALUES ('04ce99be-2d0b-415c-9262-ff79dd7e08d6','Serve with fish and chips, crab cakes or salmon!','2022-03-06 02:44:19.132995','3cd3f061-f3bc-4042-84c6-bb5f13722996',3),('1c39ea35-3204-42ba-aa6e-d7055c369176','Store in the fridge for up to 2 weeks.','2022-03-06 02:44:19.131298','3cd3f061-f3bc-4042-84c6-bb5f13722996',2),('28be0da6-1114-4b36-9a6b-81fdc9b8db86','Add chickpeas to stew and let simmer for approx. 10 min. Before serving, add kale and salt to taste. Serve with fresh herbs and lemon juice. Enjoy!','2022-03-06 00:56:49.906658','ce7c42d8-f557-42e1-8e53-d9925bcafd3b',5),('6251bdb8-7d1b-48a9-8de0-83ebc03f758e','Meanwhile, prepare quinoa according to package instructions, boiling it with the cider vinegar and some of the lemon juice. When little white rings begin to form around the grains, drain any excess water and set quinoa aside.','2022-03-06 00:56:49.904226','ce7c42d8-f557-42e1-8e53-d9925bcafd3b',4),('6532ad90-1202-44c5-b4e0-804c65d83453','Mix all ingredients together in a bowl, Season with sat and pepper, to taste.','2022-03-06 02:44:19.127485','3cd3f061-f3bc-4042-84c6-bb5f13722996',1),('88e83935-918c-4f50-bfe1-7c868765da99','In a large pot, heat the olive oil over medium heat. Add onion and garlic and sear quickly. Lower heat, add all of the spices, and sauté for approx. 2 min. Add sweet potatoes, carrots, bell pepper and fennel and sauté for approx. 2 more min.','2022-03-06 00:56:49.901238','ce7c42d8-f557-42e1-8e53-d9925bcafd3b',2),('b9cf8d28-8d18-41da-8e60-267730f02384','Peel and finely dice onion and garlic. Peel carrots and sweet potatoes and cut into bite-size pieces. Deseed and dice bell pepper. Remove leaves and core from fennel and chop rest into small pieces. Wash kale, remove leaves from stems, and cut or tear into bite-size pieces.','2022-03-06 00:56:49.899350','ce7c42d8-f557-42e1-8e53-d9925bcafd3b',1),('f479ab51-b762-4a5d-8efd-418cc0845412','Stir in water, vegetable stock, and tomatoes and bring to a boil. Reduce heat and let simmer for approx. 15 – 20 min. until sweet potatoes are softened, but still firm.','2022-03-06 00:56:49.903094','ce7c42d8-f557-42e1-8e53-d9925bcafd3b',3);
/*!40000 ALTER TABLE `instructions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moods`
--

DROP TABLE IF EXISTS `moods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moods` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moods`
--

LOCK TABLES `moods` WRITE;
/*!40000 ALTER TABLE `moods` DISABLE KEYS */;
INSERT INTO `moods` VALUES ('13b94d8f-400a-472e-91b5-70afcc49cfaf','Energetic','💃',1),('55410636-a11f-496c-ac99-81b5c0db21a7','Normal','👌',1),('7eb703ff-4717-4f9b-8450-69a2c2191389','Mad','😤',1),('9cb24865-8634-4f2c-9451-a4b4fe6aa769','Good','🙃',1),('bd9a49c5-a416-43b8-b762-c1bbe30cd5de','Tired','😩',1),('dc21d004-7585-4a89-8dc1-a3e3d386a0ca','Sad','😔',1),('e14d4ea7-19a6-455e-bcf5-3e5b48fedd16','Happy','😄',1),('e24e1415-39c6-41ca-9498-96f1d7dd30af','Stressed','😥',1),('f7335a28-cd26-4059-8c48-0e5e16b5b8f2','Calm','🧘‍♀️',1),('ff7cad92-fe4e-42c2-bdb6-a1eed8b7b87b','Excited','👏',1);
/*!40000 ALTER TABLE `moods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moods_records`
--

DROP TABLE IF EXISTS `moods_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moods_records` (
  `id` varchar(36) NOT NULL,
  `date` datetime NOT NULL,
  `moodId` varchar(36) DEFAULT NULL,
  `userId` varchar(36) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  KEY `FK_fa776a74e06bb9d169f5850528a` (`moodId`),
  KEY `FK_4fb18c49a1ec567c837f7baa30e` (`userId`),
  CONSTRAINT `FK_4fb18c49a1ec567c837f7baa30e` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_fa776a74e06bb9d169f5850528a` FOREIGN KEY (`moodId`) REFERENCES `moods` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moods_records`
--

LOCK TABLES `moods_records` WRITE;
/*!40000 ALTER TABLE `moods_records` DISABLE KEYS */;
INSERT INTO `moods_records` VALUES ('06710f38-1ec5-460c-87df-4339ff0be602','2022-03-07 03:55:05','55410636-a11f-496c-ac99-81b5c0db21a7','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:56:59.024570'),('2a98203e-940f-4800-beb4-6188744b26a0','2022-03-05 16:31:01','bd9a49c5-a416-43b8-b762-c1bbe30cd5de','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:56:59.024570'),('3402779d-5b23-4a81-8316-289ebdba30e7','2022-03-05 20:41:31','55410636-a11f-496c-ac99-81b5c0db21a7','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:56:59.024570'),('3c6f8f4d-b412-448e-afc3-b2ba178bd0b6','2022-03-05 20:41:33','13b94d8f-400a-472e-91b5-70afcc49cfaf','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:56:59.024570'),('58725d05-3129-43da-9833-8f7ee48731c4','2022-03-09 20:42:40','e24e1415-39c6-41ca-9498-96f1d7dd30af','788d0c7c-d4d5-4f04-a9c9-0099c658a3ba','2022-03-09 20:42:39.795691'),('5b40ee3e-aefc-43e3-a72e-935ac83b4b17','2022-03-05 20:57:43','e14d4ea7-19a6-455e-bcf5-3e5b48fedd16','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:56:59.024570'),('71a422ec-9747-4387-8bf9-d65cb95051e6','2022-03-07 03:55:05','13b94d8f-400a-472e-91b5-70afcc49cfaf','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:56:59.024570'),('7b58b068-0485-4680-9284-5b36b6a72283','2022-03-05 20:57:44','e14d4ea7-19a6-455e-bcf5-3e5b48fedd16','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:56:59.024570'),('7dcdc08a-bce5-4229-a785-c5def878d75b','2022-03-05 20:57:41','e14d4ea7-19a6-455e-bcf5-3e5b48fedd16','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:56:59.024570'),('a13b5416-8d49-487f-bf30-27f076c23232','2022-03-05 20:41:37','13b94d8f-400a-472e-91b5-70afcc49cfaf','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:56:59.024570'),('a40a656d-2ac5-4a4f-8556-50b0d5c8d7ce','2022-03-07 17:10:43','55410636-a11f-496c-ac99-81b5c0db21a7','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 17:10:43.012082'),('b100048e-9b52-44c5-b429-498474c2863a','2022-03-07 18:09:23','13b94d8f-400a-472e-91b5-70afcc49cfaf','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 18:09:23.099298'),('c7be4498-5c8f-41c5-97a2-d52174e7625a','2022-03-07 17:10:53','55410636-a11f-496c-ac99-81b5c0db21a7','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 17:10:53.462844'),('d3deba38-70f5-4393-b86f-986eee3ad667','2022-03-05 20:57:26','9cb24865-8634-4f2c-9451-a4b4fe6aa769','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:56:59.024570'),('ef873270-42ca-4a5b-bb17-d6578e3addf9','2022-03-05 20:41:35','7eb703ff-4717-4f9b-8450-69a2c2191389','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:56:59.024570'),('fe287069-9b81-451b-9e18-ac9f410581ea','2022-03-05 20:41:31','13b94d8f-400a-472e-91b5-70afcc49cfaf','5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-07 15:56:59.024570');
/*!40000 ALTER TABLE `moods_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutrition`
--

DROP TABLE IF EXISTS `nutrition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nutrition` (
  `id` varchar(36) NOT NULL,
  `code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrition`
--

LOCK TABLES `nutrition` WRITE;
/*!40000 ALTER TABLE `nutrition` DISABLE KEYS */;
INSERT INTO `nutrition` VALUES ('04a17b42-9c5a-4d14-a346-aac8ff1e996a','K','Potassium, K','mg'),('05203218-b755-4707-b69c-8fcd970ccc9f','TOCPHA','Vitamin E (alpha-tocopherol)','mg'),('12bea159-d23d-4aa1-b8b5-87dcdd317492','FAPU','Fatty acids, total polyunsaturated','g'),('16a37c47-3e05-45ae-b441-9fe5729807c2','THIA','Thiamin','mg'),('1a49414f-5edd-45a6-81b9-db91a615e601','VITD','Vitamin D (D2 + D3)','µg'),('1d1b52fc-ca72-4587-8533-d3d761c1f454','FOLFD','Folate, food','µg'),('1f517980-9b27-40e0-920e-f88120b8503e','PROCNT','Protein','g'),('2bb50176-fcb0-46e2-9469-9305bb605ac9','SUGAR.added','Added sugar','g'),('3103bd20-afb9-4c66-9753-8b00d6017193','CHOLE','Cholesterol','mg'),('32b911bd-0611-4610-ad03-987b0853ada0','FAT','Total lipid (fat)','g'),('331a0f8f-70eb-437d-9122-2a3ed76536a9','FOLDFE','Folate, DFE','µg'),('359a18ad-62dd-4ea6-a13c-fcc3f9bba9a7','SUGAR','Sugars, total','g'),('400b9868-cdee-4c6c-924f-27c25bfa6b28','VITC','Vitamin C, total ascorbic acid','mg'),('432f0a87-1a87-449a-abf0-dbdc73a2d1c1','P','Phosphorus, P','mg'),('5260e649-9b8c-4192-aa6b-72dbcb0a55cb','VITB12','Vitamin B-12','µg'),('5444b4ca-c639-4d0c-85c4-8fea99d16d4b','CHOCDF','Carbohydrate, by difference','g'),('5d98a6e9-b639-4a90-9f74-86e2909437df','FAMS','Fatty acids, total monounsaturated','g'),('667bca12-89ad-4bae-abca-2c3dc085d78f','ZN','Zinc, Zn','mg'),('6d1c7e6e-f51f-4c7f-82f6-a30deb42eb27','VITA_RAE','Vitamin A, RAE','µg'),('6e283f44-5288-4a0b-83f4-5726babe2722','Sugar.alcohol','Sugar alcohols','g'),('746d230a-fc8b-42a0-bd44-c88456346ca6','CA','Calcium, Ca','mg'),('8588d5b4-8a19-41ed-9729-9fcf37d55b01','RIBF','Riboflavin','mg'),('8661d1d3-3c97-46e6-85fe-a9246bbe6e8c','FOLAC','Folic acid','µg'),('8c1a7fd0-84e5-4698-92a4-f4f0dffd5a46','ENERC_KCAL','Energy','kcal'),('90f4101d-989c-454a-93da-fbde43afaf9a','NA','Sodium, Na','mg'),('93c883da-28ee-49a0-ae38-f64bbb822b7f','FASAT','Fatty acids, total saturated','g'),('9b84a10b-cdfa-4c66-9027-bfbd7d414d70','NIA','Niacin','mg'),('a431cd49-9250-4d3b-9efd-4838ec98922d','MG','Magnesium','mg'),('a548eb6e-fbb9-44da-8d9e-00184730c12b','FE','Iron, Fe','mg'),('b4e7b0c2-43b9-4b4a-ada9-4a76add4b352','FIBTG','Fiber, total dietary','g'),('d66e834e-5ebf-4aa7-972d-85068bba9835','WATER','Water','g'),('e4ce6ca1-1958-4c8a-86c5-ad5c3f1400fd','CA','Calcium','mg'),('eb75bf36-3fc3-4d23-b49a-309b87695465','VITB6A','Vitamin B-6','mg'),('f7c8409e-834b-4788-ad85-836a748ebf72','FATRN','Fatty acids, total trans','g'),('fc717f32-8aed-480e-bba5-b61c4d6116c2','CHOCDF.net','Carbohydrate (net)','g'),('fc875a22-c9b6-42f1-b4ca-a03b3d804926','VITK1','Vitamin K (phylloquinone)','µg');
/*!40000 ALTER TABLE `nutrition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutrition_recomendation`
--

DROP TABLE IF EXISTS `nutrition_recomendation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nutrition_recomendation` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `population` varchar(255) NOT NULL,
  `ageStart` int NOT NULL,
  `ageEnd` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrition_recomendation`
--

LOCK TABLES `nutrition_recomendation` WRITE;
/*!40000 ALTER TABLE `nutrition_recomendation` DISABLE KEYS */;
INSERT INTO `nutrition_recomendation` VALUES ('009135e9-9c11-484f-85b4-f1cc0c4256fb','Calcium','CA',1000,'mg','LACTATION',19,30),('018090a3-26ef-4277-bbce-a25bba2a5fa6','Water','WATER',2,'g','FEMALE',9,13),('01cdc246-024d-4b43-8a8b-92e08b0d5972','Vitamin A','VITA_RAE',600,'µg','FEMALE',9,13),('01e71ec9-fc97-4b25-b95c-5df3018ba462','Vitamin B-6','VITB6A',1,'mg','CHILDREN',4,8),('037728c1-7b48-4c69-974f-0b48c1eb4ed7','Protein','PROCNT',56,'g','MALE',70,100),('047ef358-6a42-45dc-a2f1-b4d271f7a9ca','Iron','FE',9,'mg','LACTATION',31,50),('0528938b-663f-49db-8037-95f024ce08a1','Niacin','NIA',6,'mg','CHILDREN',1,3),('054bae58-f594-4dd6-bd71-3d86fb7a826a','Water','WATER',1,'g','CHILDREN',1,3),('054c5a29-7195-4de0-8139-54c5a2252dd9','Magnesium','MG',400,'mg','MALE',19,30),('05f4bf51-4d2d-4cef-b477-5d22daa711e2','Iron','FE',8,'mg','MALE',70,100),('0654ea6f-4ddf-4213-90bc-1e1ff36b4380','Fat','FAPU',-1,'g','FEMALE',31,50),('06adfcc6-3eb3-4a3b-a25d-fd2f0231a588','Phosphorus','P',700,'mg','FEMALE',19,30),('06c0b9bf-1a71-40c0-b89c-54c9260bcd63','Magnesium','MG',320,'mg','FEMALE',31,50),('08031125-8a64-4602-8fa9-5d7b40260305','Water','WATER',3,'g','PREGNANCY',14,18),('0862de55-e732-45d0-aba8-4042ce27d1a3','Vitamin B-12','VITB12',3,'µg','LACTATION',14,18),('09022413-99bb-4669-8308-a62e74421aac','Iron','FE',27,'mg','PREGNANCY',31,50),('0930f719-96fc-43f0-aa00-8219843384f1','Phosphorus','P',1250,'mg','MALE',14,18),('0aa8d6dd-2b75-47c0-8be5-a49542d62d34','Fiber','FIBTG',28,'g','PREGNANCY',14,18),('0aebb70f-7074-4750-84e1-93cd80b58083','Sodium','NA',1500,'mg','MALE',19,30),('0b432814-951d-4dbe-a029-661d511d661c','Iron','FE',9,'mg','LACTATION',19,30),('0b6f5659-5e0f-467c-99d3-b15e482ad50a','Iron','FE',15,'mg','FEMALE',14,18),('0bdcefc4-dbe4-4259-a17a-88df79b029d9','Vitamin C','VITC',85,'mg','PREGNANCY',19,30),('0c6ea532-1d4f-4073-956f-c69f53ec8b5c','Vitamin D','VITD',15,'µg','MALE',51,70),('0cd18641-2f6d-4062-9ece-ff34998df4c2','Zinc','ZN',12,'mg','LACTATION',19,30),('0d12db87-5077-4737-9d43-c899b829e741','Niacin','NIA',17,'mg','LACTATION',31,50),('0d2ed9b6-5c24-4c78-8e0f-4380bf047def','Potassium','K',2900,'mg','PREGNANCY',31,50),('0e4549ae-3848-4144-bdaf-174abacac9fb','Thiamin','THIA',1,'mg','MALE',14,18),('0ea2b5e8-57b9-4135-a0d0-5f1c46035b55','Folate','FOLFD',400,'µg','FEMALE',14,18),('0eeb499b-0052-49b3-9e96-982652c5ac58','Folate','FOLFD',400,'µg','MALE',31,50),('0f1bd6c1-a002-4d63-ad93-ab1c9e103bd3','Carbohydrate','CHOCDF',130,'g','MALE',14,18),('0fbc41b8-5d94-4a57-a5f1-7cc65379a1f4','Protein','PROCNT',71,'g','PREGNANCY',31,50),('10ecf246-cf98-4fa9-9fc9-ebaf24011769','Vitamin D','VITD',15,'µg','FEMALE',51,70),('118eae23-8d3c-4cbe-a592-2082abe2a9c8','Fiber','FIBTG',30,'g','MALE',70,100),('12242d42-f617-4721-abd3-1fd8e3700b17','Iron','FE',27,'mg','PREGNANCY',14,18),('125c4a93-bb28-4547-a84c-3e802560fd68','Carbohydrate','CHOCDF',130,'g','MALE',51,70),('1390f803-c318-4528-aec3-aea42326ed16','Vitamin K','VITK1',90,'µg','LACTATION',31,50),('13a0d334-3689-4ef3-9057-eb7d329c66de','Phosphorus','P',700,'mg','LACTATION',31,50),('14678bb5-bfbb-405b-940d-5edf5a832bfc','Phosphorus','P',460,'mg','CHILDREN',1,3),('14eb0012-9c60-4300-b43e-28ab0bcf0a31','Vitamin D','VITD',20,'µg','MALE',70,100),('150b1e00-0fe2-49b5-b8ec-6ab273b205af','Folate','FOLFD',400,'µg','FEMALE',31,50),('1591dec6-9370-459f-9d3c-4ea0523f418f','Protein','PROCNT',13,'g','CHILDREN',1,3),('15fb8889-adc1-4071-9e77-2b25c94c733f','Water','WATER',3,'g','FEMALE',19,30),('17462000-63c7-4783-8721-efcc634faf4b','Calcium','CA',1300,'mg','PREGNANCY',14,18),('174a0f0a-6769-4096-abbd-55654903d10c','Vitamin B-12','VITB12',2,'µg','MALE',31,50),('174adde7-9cbf-4350-893e-fab4d4b450eb','Folate','FOLFD',200,'µg','CHILDREN',4,8),('1777b492-59bf-477a-8a63-154f2cf2ece1','Sodium','NA',1500,'mg','LACTATION',19,30),('188dba7d-c6ff-4e42-b55c-6e2ace164ed9','Magnesium','MG',410,'mg','MALE',14,18),('18a898c0-3c7f-4e88-b17c-ebf24252ccb2','Vitamin K','VITK1',75,'µg','LACTATION',14,18),('18e7d73d-b570-47e0-8e15-654143e97fb2','Protein','PROCNT',46,'g','FEMALE',31,50),('1958a958-5dc1-423a-8f2a-25d950f9c150','Riboflavin','RIBF',1,'mg','FEMALE',70,100),('19960d10-b555-4310-8574-f65f447f2911','Sodium','NA',800,'mg','CHILDREN',1,3),('19e82a42-eca5-4789-98d2-41997ea021b8','Protein','PROCNT',71,'g','LACTATION',14,18),('1a1799a3-3f12-40ee-8981-e3151a08679c','Vitamin E','TOCPHA',15,'mg','PREGNANCY',31,50),('1a703451-2c3c-425d-b113-c7d535f3aa99','Vitamin B-6','VITB6A',2,'mg','PREGNANCY',19,30),('1a7b521f-c8cd-4d32-8661-f0ab29f3c48a','Iron','FE',18,'mg','FEMALE',31,50),('1c797ddc-41ff-4e48-9a94-c0e8b6860cbb','Iron','FE',8,'mg','MALE',9,13),('1d390db7-e882-4d96-9a1f-606eac52e047','Vitamin C','VITC',85,'mg','PREGNANCY',31,50),('1d9238f9-1200-470d-8fc2-f330653056b6','Potassium','K',2600,'mg','FEMALE',19,30),('1db9f7ce-f216-4cfc-90f2-837de6baba64','Water','WATER',3,'g','PREGNANCY',31,50),('1de03763-1ebe-4073-8833-7894f4d174c5','Phosphorus','P',1250,'mg','FEMALE',14,18),('1e472250-d3f0-4430-bd0e-921fd9d93bd3','Vitamin B-6','VITB6A',1,'mg','MALE',9,13),('1fecf0b0-4c1e-4cf4-a915-8a4b8473802b','Calcium','CA',1300,'mg','MALE',14,18),('20e99843-31e5-4e3d-8d09-ac6275bbb05e','Vitamin C','VITC',90,'mg','MALE',51,70),('20eb9713-9a5f-4c63-bb2a-9f896c412878','Niacin','NIA',14,'mg','FEMALE',14,18),('223587ef-c2c8-4b0b-8b5c-1a11f1b22533','Iron','FE',18,'mg','FEMALE',19,30),('22e2fde0-b0a4-4579-8f30-224862c10538','Calcium','CA',1000,'mg','MALE',19,30),('2345847a-0063-4c6a-a64b-71108b258929','Vitamin E','TOCPHA',15,'mg','PREGNANCY',19,30),('235ac1d0-10fe-4d11-b036-b34234c21627','Vitamin B-6','VITB6A',2,'mg','FEMALE',51,70),('23da8248-41f1-4e82-a0b6-67903fd5ff2e','Vitamin E','TOCPHA',15,'mg','MALE',31,50),('2418464c-7455-4049-af36-345cf4ec9d80','Riboflavin','RIBF',1,'mg','FEMALE',14,18),('2473f4b4-4242-40dc-a1d0-f22d967c04b7','Calcium','CA',1200,'mg','MALE',70,100),('24936857-f0cd-43de-a776-712bacf44b64','Vitamin K','VITK1',90,'µg','PREGNANCY',31,50),('24c17322-9d6f-4b47-b3fb-d0294d39b8f3','Niacin','NIA',17,'mg','LACTATION',19,30),('2528e86a-9abd-4237-b8e0-8dc06ee27a88','Vitamin K','VITK1',90,'µg','FEMALE',51,70),('2663e60c-af54-4bdd-a5d6-0b9be0dae87c','Vitamin K','VITK1',90,'µg','FEMALE',70,100),('2672bb04-355f-4d04-89ff-8d05db4eaeac','Niacin','NIA',18,'mg','PREGNANCY',14,18),('275a278c-ae9b-47b2-a4ef-19498666138d','Iron','FE',8,'mg','MALE',31,50),('27e55c3e-f076-48ba-96db-737167f46811','Vitamin D','VITD',15,'µg','PREGNANCY',19,30),('27e8687e-0826-4c86-9216-1df644873ed4','Vitamin E','TOCPHA',15,'mg','PREGNANCY',14,18),('284d1edb-7f71-4e02-b0d9-64fdb589e6ef','Protein','PROCNT',46,'g','FEMALE',70,100),('2900bd27-1d29-4514-ab3f-8fc8f81861c3','Folate','FOLFD',400,'µg','MALE',19,30),('29739c53-e6e8-41ff-b961-dc26263758ca','Protein','PROCNT',71,'g','LACTATION',31,50),('2c03e102-e221-499e-8a2d-ca0657a15dab','Sodium','NA',1500,'mg','LACTATION',31,50),('2d977962-81df-49a5-a87d-3ef269979ed1','Water','WATER',4,'g','MALE',19,30),('2dc08f80-99dd-4f5c-9daa-4478b919db5c','Protein','PROCNT',71,'g','LACTATION',19,30),('2e167952-c39e-4f17-bd21-31812ffbe87e','Phosphorus','P',700,'mg','LACTATION',19,30),('2f391f1d-f6e2-42b2-a1e5-0c1dedb6e6af','Folate','FOLFD',400,'µg','MALE',51,70),('2f543b49-a2a2-4dfb-8210-44c55f073488','Carbohydrate','CHOCDF',130,'g','CHILDREN',4,8),('2faec4ce-8128-4fbf-bd75-b9fa199a6861','Potassium','K',3400,'mg','MALE',31,50),('2fdbc9cc-9754-4f83-9233-93e92466a8b4','Magnesium','MG',420,'mg','MALE',51,70),('2fe04842-452c-4221-9131-3399c57bde16','Vitamin B-6','VITB6A',2,'mg','FEMALE',70,100),('300aba07-2a56-47cf-b6f3-5136a154c8e1','Water','WATER',2,'g','MALE',9,13),('30579916-3abd-456e-a9bd-886b9418c105','Vitamin B-12','VITB12',2,'µg','MALE',70,100),('306440ac-8370-4bbb-b80c-86951c1e7cac','Vitamin B-6','VITB6A',1,'mg','FEMALE',9,13),('30bbd056-de38-4d9e-b450-2e9d7e42444d','Zinc','ZN',11,'mg','MALE',51,70),('3371db70-2aab-4f3e-93cf-f95f1a422267','Iron','FE',27,'mg','PREGNANCY',19,30),('33836dfb-df07-460b-8a3b-87f14f5521f3','Phosphorus','P',700,'mg','FEMALE',31,50),('3406245a-9c8d-4ba9-821b-c3671c276bfe','Thiamin','THIA',1,'mg','FEMALE',70,100),('34a88667-85fa-4624-829e-405b67e9fcf9','Magnesium','MG',420,'mg','MALE',70,100),('35215e43-50c1-41d7-8e98-680f8b2edf4c','Carbohydrate','CHOCDF',130,'g','FEMALE',19,30),('35d55c9d-07cc-4c7d-853e-769ac71cd8ad','Carbohydrate','CHOCDF',130,'g','FEMALE',9,13),('36a8d428-6269-4ef3-8307-47bf27c67ed5','Zinc','ZN',8,'mg','FEMALE',70,100),('36f0c459-df1d-48ba-b214-592309bc1658','Folate','FOLFD',400,'µg','MALE',14,18),('36f70299-3820-4dc1-95b9-75b40fea8af0','Fiber','FIBTG',29,'g','LACTATION',31,50),('370618df-373e-4e04-a0f1-aa1a9c15451b','Vitamin C','VITC',45,'mg','MALE',9,13),('37a42201-f6ed-465f-b029-45b510a4f3bb','Folate','FOLFD',300,'µg','FEMALE',9,13),('389ad45c-d212-4c19-9d14-4cf200554194','Potassium','K',2500,'mg','LACTATION',14,18),('397d4820-878c-486a-a0f5-de22c17ab719','Riboflavin','RIBF',2,'mg','LACTATION',19,30),('39daf159-fdd7-43a2-b15d-c3e26002e672','Phosphorus','P',700,'mg','PREGNANCY',19,30),('3a29a51b-9931-4d70-8465-b40fcbb224e8','Vitamin D','VITD',15,'µg','FEMALE',14,18),('3a3e6f1a-6e02-49f9-96b0-88338b5ba08f','Thiamin','THIA',1,'mg','LACTATION',14,18),('3aacb469-40b9-4453-bf2d-6c83ef7e76c5','Vitamin B-6','VITB6A',1,'mg','FEMALE',19,30),('3ad531ac-2fdd-4695-b05e-bee36a202b21','Potassium','K',3000,'mg','MALE',14,18),('3ca11112-02d7-4043-8ce4-18c2979b6c16','Carbohydrate','CHOCDF',130,'g','FEMALE',70,100),('3cc9f9c7-7cb4-4112-b41d-ee1277383945','Iron','FE',10,'mg','LACTATION',14,18),('3d3d15a9-ef14-40bb-9a6f-a5b93b3ed33c','Vitamin A','VITA_RAE',1200,'µg','LACTATION',14,18),('3dc1daa4-f195-433c-ab0d-2d187ac72823','Vitamin K','VITK1',90,'µg','FEMALE',19,30),('3ddf6b0b-00bf-405a-a3df-0e893f5ac5ae','Riboflavin','RIBF',1,'mg','CHILDREN',4,8),('3e25f12b-43b7-459c-999b-be4b203a89bd','Fiber','FIBTG',28,'g','PREGNANCY',19,30),('3f0cf6cc-2996-4463-85f0-547fc5d2a063','Zinc','ZN',11,'mg','PREGNANCY',31,50),('3fbcfa32-d27f-4c12-9914-99b2b44167d7','Phosphorus','P',700,'mg','FEMALE',51,70),('3fe8ddee-fe42-4d44-971d-1da2da4e09eb','Vitamin B-6','VITB6A',1,'mg','CHILDREN',1,3),('4153aa4d-81c1-4d66-824f-28f9a44395cd','Sodium','NA',1200,'mg','MALE',9,13),('423da63d-0ac3-49e5-a5a9-c9e08f3d4a15','Vitamin B-6','VITB6A',1,'mg','MALE',14,18),('42cc182b-5c29-4a08-9d71-fa4b9ca9c1da','Potassium','K',2600,'mg','FEMALE',31,50),('430afaf0-018a-4209-b967-d5c6709aa698','Thiamin','THIA',1,'mg','CHILDREN',1,3),('4316c3c2-0da6-461a-a884-c35ca42baa47','Thiamin','THIA',1,'mg','FEMALE',19,30),('447fe931-d4b3-4f24-a8c2-55151e0f2ef7','Zinc','ZN',3,'mg','CHILDREN',1,3),('4490b7a6-bad8-49f5-a840-09481849477b','Thiamin','THIA',1,'mg','MALE',70,100),('449dd7da-1771-411a-90c8-a42d1b413ddc','Vitamin A','VITA_RAE',770,'µg','PREGNANCY',31,50),('449e66bb-5216-46d7-814a-cc2a45d215d4','Vitamin C','VITC',75,'mg','FEMALE',19,30),('44c327e2-5ae1-437e-bd2b-fabab96ec908','Phosphorus','P',1250,'mg','LACTATION',14,18),('450049cc-ea60-4751-a2dc-e54bed4248e6','Vitamin E','TOCPHA',19,'mg','LACTATION',19,30),('45367062-7f8d-4751-9bc7-ca7d8fe21c81','Protein','PROCNT',34,'g','MALE',9,13),('45b124ee-41a1-4c52-9f1e-9f6a414a0d86','Vitamin E','TOCPHA',15,'mg','FEMALE',70,100),('45e1ef76-1996-4b62-a60c-78fd331dbd52','Carbohydrate','CHOCDF',175,'g','PREGNANCY',31,50),('46688410-759e-4e56-9bad-f676c186de85','Fiber','FIBTG',21,'g','FEMALE',70,100),('46be9fc5-358f-4640-8066-88048708f079','Magnesium','MG',400,'mg','PREGNANCY',14,18),('46d90f97-28ab-4baf-a462-83a17803e425','Zinc','ZN',8,'mg','FEMALE',51,70),('46f507a3-9371-480e-b5d5-98c1daf0ae2d','Carbohydrate','CHOCDF',210,'g','LACTATION',19,30),('470bc485-7c1e-443e-8a2f-fc55beb3d95c','Carbohydrate','CHOCDF',130,'g','MALE',9,13),('4740d6c8-6d97-4ffd-b710-3af2cef05666','Vitamin K','VITK1',75,'µg','FEMALE',14,18),('47f431f1-5937-43ba-9cb8-4c400e78d456','Phosphorus','P',1250,'mg','MALE',9,13),('48040390-1598-4499-ad61-bb92b69b4723','Niacin','NIA',16,'mg','MALE',70,100),('48c6ceb4-53ea-47cf-9457-bee9bbc55d08','Vitamin K','VITK1',90,'µg','PREGNANCY',19,30),('48eba0c3-ca09-460d-9a61-301f2b4d13c4','Zinc','ZN',9,'mg','FEMALE',14,18),('4918290d-6f50-4d04-8edd-1adcc5487b01','Water','WATER',4,'g','LACTATION',19,30),('493ded24-37ca-4f37-89af-87bdc3cfaf50','Fiber','FIBTG',26,'g','FEMALE',14,18),('4a27cb75-6075-4077-9329-26a236d13b4f','Vitamin C','VITC',25,'mg','CHILDREN',4,8),('4a705de3-4b4a-4552-aa9b-b2faaf7fffcd','Thiamin','THIA',1,'mg','MALE',19,30),('4ab7ba35-8214-4953-8081-79fcdafeed50','Fatty acids','FAPU',1,'g','LACTATION',31,50),('4b34d727-d008-418a-b965-47983bee9865','Vitamin K','VITK1',75,'µg','PREGNANCY',14,18),('4b3c3ddd-7f79-4300-bedf-17b2fb54c96c','Niacin','NIA',18,'mg','PREGNANCY',19,30),('4c0306ae-2dc3-4f5f-8640-84d71e62550e','Potassium','K',2800,'mg','LACTATION',31,50),('4c777dc6-ada1-4270-8497-56e805df2a3c','Fatty acids','FAPU',1,'g','CHILDREN',1,3),('4c8e60ee-cc96-4c6c-ac4a-05424683fcc7','Sodium','NA',1500,'mg','FEMALE',51,70),('4ca604e5-da3a-4bab-b38a-f3bf69147842','Fatty acids','FAPU',1,'g','FEMALE',19,30),('4d4fb46e-1c5e-4757-874d-d62289597134','Vitamin K','VITK1',60,'µg','MALE',9,13),('4df42b62-035b-4e47-afe6-3db54000e61f','Calcium','CA',1000,'mg','FEMALE',19,30),('4e1e3a28-3997-4b0d-b9d0-1f8ec26285a3','Protein','PROCNT',71,'g','PREGNANCY',19,30),('4e6e78c1-ab19-41f3-9bda-faef1e876d20','Vitamin C','VITC',90,'mg','MALE',31,50),('4e9c12b7-cde4-4fb3-8751-e720dec039e1','Vitamin A','VITA_RAE',400,'µg','CHILDREN',4,8),('4e9f2517-35b0-4ec2-b472-9026b352f34a','Fat','FAPU',-1,'g','LACTATION',31,50),('4f12eaa9-e317-44a6-90be-ff400881a5f0','Phosphorus','P',700,'mg','MALE',70,100),('4f7b9f1c-a853-4179-aed3-0601f54c8036','Vitamin E','TOCPHA',15,'mg','FEMALE',14,18),('4fd7d0fe-77e1-40fb-a74b-c4a53e1d2ed7','Fiber','FIBTG',25,'g','CHILDREN',4,8),('5280d8fa-e421-4fbb-87c9-cb67a9bdcddf','Carbohydrate','CHOCDF',175,'g','PREGNANCY',14,18),('532e07b8-7934-4513-81c6-7e8a789a8298','Magnesium','MG',420,'mg','MALE',31,50),('537af090-39bc-4811-88c9-44b4d8d91934','Riboflavin','RIBF',1,'mg','PREGNANCY',31,50),('53d1d3c0-f202-403a-8ee9-4b1d0a808280','Sodium','NA',1500,'mg','LACTATION',14,18),('542f43d3-f9d1-4aa3-8ad1-6dfdf10fa47c','Thiamin','THIA',1,'mg','LACTATION',31,50),('544158b0-05f3-4021-9dff-0574b9f669ed','Protein','PROCNT',71,'g','PREGNANCY',14,18),('55327f55-714c-401f-8e5b-b64bbbff7f3b','Riboflavin','RIBF',1,'mg','FEMALE',31,50),('55687543-2753-432a-a64a-5a9d21d538b0','Fat','FAPU',-1,'g','FEMALE',51,70),('56338ec3-0c6b-47a4-9e09-145526b96e5e','Thiamin','THIA',1,'mg','PREGNANCY',19,30),('564a50dd-3ffd-459b-874f-2bbabb350461','Potassium','K',2300,'mg','CHILDREN',4,8),('570840eb-a35f-4ac6-a705-c7950057d379','Magnesium','MG',130,'mg','CHILDREN',4,8),('574d4654-39dd-4edc-877a-b4a0328ce836','Vitamin D','VITD',15,'µg','CHILDREN',4,8),('57a5405c-d1b4-4273-a592-6a3efdde1a96','Vitamin K','VITK1',30,'µg','CHILDREN',1,3),('57f16bfc-ce3a-4d76-8911-d3c3e7afe18d','Zinc','ZN',11,'mg','MALE',31,50),('58919e2b-37df-4263-b8bf-2ec1feba3c18','Vitamin C','VITC',75,'mg','FEMALE',51,70),('5937822d-b64f-4f22-a639-8b9928f8780e','Potassium','K',2000,'mg','CHILDREN',1,3),('596ae208-5112-4f3c-93a6-5cf22a67b54e','Vitamin K','VITK1',120,'µg','MALE',70,100),('5999c215-3a15-4e15-b3e5-cc8050616d1c','Vitamin A','VITA_RAE',700,'µg','FEMALE',51,70),('59f73391-448b-4711-9423-1e53733f1b6e','Niacin','NIA',14,'mg','FEMALE',19,30),('5b5b84f6-c5ce-43c3-8299-01ea09ad054b','Fatty acids','FAPU',2,'g','MALE',70,100),('5b74149d-d7fa-4455-ba87-651c577bbb73','Vitamin C','VITC',120,'mg','LACTATION',31,50),('5c408b5d-1bf9-43fe-b0eb-347997b3a076','Carbohydrate','CHOCDF',210,'g','LACTATION',31,50),('5cc0250a-4f1b-4594-8baf-ef662370fd2a','Phosphorus','P',700,'mg','PREGNANCY',31,50),('5e0d40ab-cc83-4a99-b108-9291db55fcfa','Vitamin B-12','VITB12',2,'µg','FEMALE',70,100),('5f9b1b63-10e7-4286-88ae-79c0f0630cb2','Fatty acids','FAPU',1,'g','FEMALE',51,70),('5fec21f7-0ebd-4b6c-ac5b-968079a861b3','Water','WATER',2,'g','FEMALE',14,18),('5ffddba6-fa33-4e67-9246-a05736ce51e1','Vitamin C','VITC',120,'mg','LACTATION',19,30),('60aa4023-554f-4077-85f1-30c6075de0ad','Potassium','K',3400,'mg','MALE',51,70),('61b63a21-784d-472b-b02d-5169800736be','Carbohydrate','CHOCDF',130,'g','CHILDREN',1,3),('61f33f6c-81a4-47fe-940c-624db1761e55','Vitamin B-12','VITB12',3,'µg','PREGNANCY',31,50),('62a8b684-f32a-41dc-99c3-a46e10dd3c4c','Vitamin A','VITA_RAE',900,'µg','MALE',14,18),('62cc756d-4a2b-4235-ab2a-fcbeb3201309','Fiber','FIBTG',31,'g','MALE',9,13),('6496b066-49b9-482a-80b6-feca45c28450','Water','WATER',2,'g','CHILDREN',4,8),('65ede8b5-272a-4fe3-b272-e8ff1b8961a0','Carbohydrate','CHOCDF',130,'g','FEMALE',31,50),('6630065a-4c4c-40c9-9b3e-b34471ce5c2b','Vitamin E','TOCPHA',6,'mg','CHILDREN',1,3),('6634c405-aee2-4a41-96ee-bac6aaa18362','Iron','FE',8,'mg','MALE',51,70),('6642f7c7-17d3-4e82-834f-37d1c48fde87','Thiamin','THIA',1,'mg','FEMALE',9,13),('669048a9-0a1e-4d0f-ab5c-836047becdb9','Calcium','CA',1000,'mg','MALE',51,70),('6720c3cd-51d8-4738-a188-7ea1b1226eed','Vitamin C','VITC',115,'mg','LACTATION',14,18),('672cd346-0f9b-4560-8536-41f796af4f38','Riboflavin','RIBF',1,'mg','FEMALE',19,30),('67b16b6f-7a5d-49eb-b756-6124433c2d5c','Magnesium','MG',320,'mg','LACTATION',31,50),('689c4f1b-75a4-4910-9a1f-5dabc293c34e','Vitamin E','TOCPHA',15,'mg','MALE',51,70),('695d4d42-616d-4010-8da6-740226a9aec3','Vitamin D','VITD',15,'µg','CHILDREN',1,3),('69aa040f-cf0e-4100-9439-a8bdef73ce89','Zinc','ZN',11,'mg','MALE',14,18),('69df59d6-5a16-4d1d-9388-ad777761f31c','Vitamin A','VITA_RAE',300,'µg','CHILDREN',1,3),('6b8e72b5-6612-4f57-a571-9776b84f43ce','Vitamin B-12','VITB12',1,'µg','CHILDREN',4,8),('6bc5957c-f0b9-4b79-a15e-50eb2159e3f6','Calcium','CA',1300,'mg','LACTATION',14,18),('6c3f0fae-9622-4613-b9a6-d83f5758695f','Vitamin B-12','VITB12',2,'µg','FEMALE',51,70),('6c4a75d9-aebc-48c0-9267-54b03f38ff85','Fiber','FIBTG',19,'g','CHILDREN',1,3),('6ce6e1c3-1313-4088-ae9b-3e46dbc11215','Niacin','NIA',12,'mg','FEMALE',9,13),('6d0e61b0-e3df-4e8c-be6a-2b70ea2c740f','Vitamin E','TOCPHA',15,'mg','FEMALE',51,70),('6d29bcdf-61bd-4446-a7cd-a3890c7ee612','Magnesium','MG',80,'mg','CHILDREN',1,3),('6d8d1407-d101-4d03-b8ca-2b62f0b272a9','Folate','FOLFD',500,'µg','LACTATION',31,50),('6da7bc12-33dc-4cd2-bdfc-618da893512e','Potassium','K',2800,'mg','LACTATION',19,30),('6dbb4f97-7b32-4162-a93b-729e52fd2f9a','Fat','FAPU',-1,'g','PREGNANCY',19,30),('6f4344a5-3e5b-47cc-ab80-d3c4fbb551f4','Carbohydrate','CHOCDF',130,'g','MALE',31,50),('70030ebd-df4e-49e9-9c3b-0bb9965eec5a','Vitamin A','VITA_RAE',700,'µg','FEMALE',31,50),('71214eba-31a1-4482-8617-5381b25e9308','Fat','FAPU',-1,'g','FEMALE',70,100),('713ae5bf-53f4-4eba-8f7f-87a0ca1037fd','Fat','FAPU',-1,'g','PREGNANCY',31,50),('72660b65-cc08-49ef-ad87-b5bd01d5c983','Carbohydrate','CHOCDF',130,'g','FEMALE',51,70),('73c242c9-3a1b-4c5d-bc5f-d504b1dbea1e','Vitamin A','VITA_RAE',900,'µg','MALE',19,30),('741c5ac2-2bc8-47ec-b542-ede77632788f','Calcium','CA',1300,'mg','FEMALE',9,13),('741edfc6-5c67-4d05-96af-390a5d755f5a','Vitamin D','VITD',15,'µg','PREGNANCY',14,18),('7470d771-7a4a-416e-9a65-463c2c932259','Niacin','NIA',18,'mg','PREGNANCY',31,50),('74bbb74f-9951-4663-a563-11c5489246c2','Vitamin A','VITA_RAE',900,'µg','MALE',70,100),('74d207d7-92c0-4ae9-be51-6b75f10a34d7','Iron','FE',10,'mg','CHILDREN',4,8),('74ec2ab4-b7ce-4235-b4a1-cbd9c77a054c','Vitamin B-12','VITB12',3,'µg','LACTATION',19,30),('75440d57-0a4a-43bc-937a-397aaf63864b','Vitamin B-12','VITB12',2,'µg','MALE',14,18),('75694a57-53da-4e32-b86b-4b348dba3ab2','Riboflavin','RIBF',1,'mg','PREGNANCY',14,18),('75eace70-1e4e-44ff-a1b2-c5dce3356e49','Riboflavin','RIBF',1,'mg','MALE',19,30),('76272ebe-2ee2-49d6-b846-fe5da0f1ec27','Vitamin E','TOCPHA',7,'mg','CHILDREN',4,8),('76831fc9-1512-4140-b20a-ab60e1b168e9','Thiamin','THIA',1,'mg','CHILDREN',4,8),('7747200b-5900-4231-beb2-8bea550c6910','Vitamin B-12','VITB12',3,'µg','PREGNANCY',19,30),('775318f9-91d0-4858-98e9-c47b49cfc334','Fiber','FIBTG',25,'g','FEMALE',31,50),('77678171-c07a-4a3a-b2ca-ec186b2ada0c','Phosphorus','P',700,'mg','MALE',31,50),('79a96ed9-a8e0-4e09-a882-db083b3c6f0a','Vitamin C','VITC',80,'mg','PREGNANCY',14,18),('79b0169b-252e-4c05-80d1-1c7fbc21b8b8','Vitamin E','TOCPHA',15,'mg','FEMALE',31,50),('7a2a1a8a-49c9-42a1-9bbc-b222b6939f49','Fat','FAPU',-1,'g','FEMALE',14,18),('7ce4dd0c-dc61-4a08-8d2b-ff25a38b0170','Protein','PROCNT',19,'g','CHILDREN',4,8),('7d2404a3-a0e0-49ae-a205-2e620af7e1ea','Fat','FAPU',-1,'g','PREGNANCY',14,18),('7de14eda-c0d9-4804-9ee9-d112ff96646c','Phosphorus','P',500,'mg','CHILDREN',4,8),('7eb5a571-2ac9-483c-b7fb-ac4991096464','Vitamin A','VITA_RAE',900,'µg','MALE',51,70),('80c1488d-7fd5-469e-99ea-9c012e833109','Vitamin E','TOCPHA',11,'mg','FEMALE',9,13),('80d041b1-49ce-46e3-922d-8df37418a0e5','Protein','PROCNT',34,'g','FEMALE',9,13),('816c1471-6a2d-496f-8805-99955bd6b389','Vitamin C','VITC',90,'mg','MALE',70,100),('83140219-2680-4f0f-9ec1-4b61037a34d5','Niacin','NIA',14,'mg','FEMALE',51,70),('84a55a2b-501f-4400-a1d2-79bf5c83970c','Fat','FAPU',-1,'g','MALE',14,18),('84bd2523-8dff-4bc7-840f-a5f39a831917','Fiber','FIBTG',30,'g','MALE',51,70),('8514a218-75ac-4793-a409-e9eedd775e01','Vitamin B-12','VITB12',1,'µg','CHILDREN',1,3),('85d38d8b-f197-447c-ae91-237bef6754d9','Vitamin B-12','VITB12',3,'µg','LACTATION',31,50),('87fbfe99-1d07-49da-bd94-4ffd9e7110de','Vitamin B-6','VITB6A',1,'mg','FEMALE',31,50),('880a452d-efdf-4a4c-897c-11e5e400bd12','Magnesium','MG',240,'mg','FEMALE',9,13),('88c0ed6f-c391-4a16-ae86-83449baa8c28','Fat','FAPU',-1,'g','MALE',31,50),('89f4d44a-bdb5-4f7f-91b4-5acfe689ff7c','Riboflavin','RIBF',1,'mg','MALE',51,70),('8a6f3746-97c4-41db-be56-4fb12c873501','Magnesium','MG',360,'mg','PREGNANCY',31,50),('8a77d16e-61dc-40e6-9b44-9969f4872ec0','Thiamin','THIA',1,'mg','FEMALE',14,18),('8af178bb-0f75-41bc-a432-cc002dac4fdf','Potassium','K',3400,'mg','MALE',70,100),('8bd9eaa0-a01a-4805-867d-c920481b78c1','Vitamin B-6','VITB6A',1,'mg','MALE',19,30),('8d634197-3c95-443a-8036-673796078a3c','Potassium','K',2600,'mg','PREGNANCY',14,18),('8d8b58bb-2728-445b-99f9-35020e43739f','Phosphorus','P',1250,'mg','PREGNANCY',14,18),('8da2d373-9bc5-4e6e-bd96-411aac218f28','Folate','FOLFD',600,'µg','PREGNANCY',19,30),('8f274b4a-a4c4-490f-822e-47185f5963c5','Folate','FOLFD',600,'µg','PREGNANCY',14,18),('8f9b9e61-7d52-43d2-8d00-cbe29b51b46e','Niacin','NIA',8,'mg','CHILDREN',4,8),('8fa53f68-9acc-447a-8163-fb35ee8caa6a','Thiamin','THIA',1,'mg','MALE',31,50),('90b68cac-3db3-4ed4-8aa3-afbd69a51758','Fatty acids','FAPU',1,'g','CHILDREN',4,8),('910df2ed-f341-42c2-b4f9-d24b938b9663','Vitamin B-12','VITB12',2,'µg','FEMALE',14,18),('91397db7-aa10-4c8c-a871-bf33e6e53481','Zinc','ZN',12,'mg','PREGNANCY',14,18),('91708751-1e9e-4ec4-9c24-840c2496ece3','Fatty acids','FAPU',1,'g','FEMALE',14,18),('91da37c1-aba2-4f73-9489-a1a8dbb58e47','Thiamin','THIA',1,'mg','LACTATION',19,30),('91e61ed2-6348-4c30-ab7d-0949826fddbb','Vitamin B-12','VITB12',2,'µg','MALE',9,13),('924ca016-0a9c-40c9-ada7-859ebd5c6b4b','Calcium','CA',1300,'mg','MALE',9,13),('9272b356-89da-4ba8-a7c7-079a23b14070','Calcium','CA',1300,'mg','FEMALE',14,18),('927f0401-4fc4-4463-a4b7-ac4a87d1a361','Magnesium','MG',350,'mg','PREGNANCY',19,30),('93270e93-8b43-40d3-9c36-6adfb0eaee84','Vitamin E','TOCPHA',11,'mg','MALE',9,13),('9348e177-b0d4-4b10-97d4-b22ff29dd07e','Niacin','NIA',14,'mg','FEMALE',70,100),('94b09909-b46d-40e7-b864-994f5d071e26','Riboflavin','RIBF',1,'mg','MALE',70,100),('95dd3742-4d25-4b13-ae76-70c94ba35d6c','Zinc','ZN',11,'mg','MALE',19,30),('96251502-ca24-42d0-8465-ff6bfc1c2e09','Sodium','NA',1500,'mg','PREGNANCY',31,50),('96524fab-7bb2-43a7-93c2-72a7eb7cc9f5','Sodium','NA',1500,'mg','FEMALE',19,30),('96ac086e-a7e6-429a-83da-0c981938f92b','Vitamin B-6','VITB6A',2,'mg','PREGNANCY',31,50),('9741b7cd-a55b-4746-8a3f-19968f502c10','Calcium','CA',1000,'mg','PREGNANCY',31,50),('988ef260-7109-4ad8-bd10-413b538cb089','Carbohydrate','CHOCDF',130,'g','FEMALE',14,18),('997182b9-8c73-44cb-b5b1-df0dcc31434d','Vitamin E','TOCPHA',15,'mg','MALE',14,18),('99c3c1c4-bf60-4606-a9ef-0a8ba057e7db','Potassium','K',2900,'mg','PREGNANCY',19,30),('99fade27-3ab0-4fc7-a8a6-f76405a38483','Zinc','ZN',8,'mg','FEMALE',19,30),('9b1068c2-cca1-411f-a590-4d1943bd9f57','Niacin','NIA',16,'mg','MALE',51,70),('9b461ca3-0285-49c2-b02f-38b0e414a174','Sodium','NA',1500,'mg','MALE',51,70),('9b4f32d3-e27c-49a3-9eda-b90c08e29fa5','Water','WATER',4,'g','LACTATION',31,50),('9c862c18-531c-4b14-aeb1-91e7db766e20','Thiamin','THIA',1,'mg','PREGNANCY',14,18),('9d43f9c1-15c4-4ef9-89ee-b487803140ce','Protein','PROCNT',56,'g','MALE',51,70),('9db718b4-d598-4bfb-a750-6b49a905a7ad','Riboflavin','RIBF',1,'mg','CHILDREN',1,3),('9e4f3d7c-e3f5-47c5-95de-f56385c025d7','Sodium','NA',1500,'mg','PREGNANCY',19,30),('a137eca9-8897-41f3-bf87-9d6a72d6a0dd','Folate','FOLFD',500,'µg','LACTATION',19,30),('a13b3a56-2e67-4291-8258-a3734eebdc22','Potassium','K',2600,'mg','FEMALE',70,100),('a1dba3f3-a038-43ea-b2c3-f568c7ffb500','Fat','FAPU',-1,'g','FEMALE',19,30),('a26c7dbe-c4fb-486f-b04a-5688e7c44ca9','Magnesium','MG',310,'mg','LACTATION',19,30),('a2dd2f9d-a6ce-40b2-b751-b05024571abf','Sodium','NA',1500,'mg','MALE',70,100),('a3408f1c-9d36-4780-8679-17e7b0153d11','Vitamin K','VITK1',90,'µg','LACTATION',19,30),('a465b03c-204c-4f84-93c6-9dbe7e0b3370','Vitamin B-6','VITB6A',2,'mg','LACTATION',14,18),('a52e0748-3e66-4ffb-9b65-57b38319f4d2','Fat','FAPU',-1,'g','LACTATION',19,30),('a5a610db-3e50-4461-a9f9-fc7cb32de415','Thiamin','THIA',1,'mg','MALE',9,13),('a5aa17c4-4c4f-49f0-b6d2-85b30dfe906c','Fatty acids','FAPU',2,'g','MALE',19,30),('a5de528f-c871-4dcf-9e4b-6b62786efbf6','Vitamin K','VITK1',120,'µg','MALE',31,50),('a5e65ef2-f8c8-428e-9956-caba3d2b879a','Water','WATER',4,'g','LACTATION',14,18),('a623203e-cf1f-4865-b099-06b3a30339c3','Vitamin A','VITA_RAE',900,'µg','MALE',31,50),('a649bf4e-4bc7-4dba-b1f8-76fa65c077fd','Vitamin D','VITD',15,'µg','LACTATION',14,18),('a6b31d18-c5b9-4b85-94ad-c606349d8f5b','Vitamin C','VITC',75,'mg','MALE',14,18),('a703e3e8-dedc-4c9f-acbc-bbf1822c55dd','Protein','PROCNT',56,'g','MALE',19,30),('a72598d2-b751-4de9-9457-0fd8bc7feebd','Potassium','K',2500,'mg','MALE',9,13),('a7445a4d-c452-46d1-bd1b-ceccf3c8ba9d','Calcium','CA',700,'mg','CHILDREN',1,3),('a7ba0ba5-63a0-482c-8704-c1844df16948','Fat','FAPU',-1,'g','FEMALE',9,13),('a883e101-c87f-4628-971f-3568e6bb1f83','Riboflavin','RIBF',2,'mg','LACTATION',14,18),('a8dd252e-c6dc-4ec8-80dc-cc8028c6e863','Fiber','FIBTG',38,'g','MALE',14,18),('a9c642f2-b604-422c-bef2-0ff1aee69cbb','Phosphorus','P',700,'mg','MALE',51,70),('aa77eef5-84c6-4c4e-9bd0-4c43eeb86254','Vitamin B-6','VITB6A',2,'mg','PREGNANCY',14,18),('aa872544-c59f-4cf0-a079-0241f004ae1d','Potassium','K',2300,'mg','FEMALE',14,18),('ab0c02f0-e42d-4caa-972c-dab17166d149','Vitamin D','VITD',15,'µg','FEMALE',31,50),('ab5020ed-c4d8-4ebd-bb5f-e8c3e59a4f93','Vitamin D','VITD',15,'µg','MALE',14,18),('ab6a9ad3-df5f-47d5-8a8c-561fa628d3bf','Calcium','CA',1200,'mg','FEMALE',70,100),('ac0e73f1-d0d2-4d70-9c83-d868ecf05adc','Vitamin D','VITD',15,'µg','LACTATION',19,30),('ac1da1bb-4e1d-444a-8781-f92a9e155dcc','Vitamin A','VITA_RAE',770,'µg','PREGNANCY',19,30),('ad21e191-9cff-4bbd-bacc-f9286a4686a5','Fiber','FIBTG',26,'g','FEMALE',9,13),('ad3f0855-da34-4131-8544-cec507688ed5','Vitamin A','VITA_RAE',1300,'µg','LACTATION',31,50),('ad3fbcb0-4062-414e-b7ce-4700a53b63f0','Vitamin E','TOCPHA',19,'mg','LACTATION',14,18),('adb25988-b777-4a37-abb9-ec81d253c432','Folate','FOLFD',500,'µg','LACTATION',14,18),('ae62faef-f34a-4881-81bd-f0b807e2e27f','Vitamin K','VITK1',60,'µg','FEMALE',9,13),('ae696502-28b1-4b22-993a-8a497b88ce63','Water','WATER',3,'g','PREGNANCY',19,30),('b19cc75e-2bdb-4619-9f5e-66482363f23c','Niacin','NIA',16,'mg','MALE',14,18),('b22b2383-e0d1-42af-a376-3049ec423555','Potassium','K',3400,'mg','MALE',19,30),('b2465193-daa5-42ec-9577-4546d1f91b1e','Fat','FAPU',-1,'g','MALE',51,70),('b2547c4e-2764-4430-ab00-e660fd85a033','Niacin','NIA',12,'mg','MALE',9,13),('b3967782-394e-4784-96a0-ae34c1745dfc','Vitamin C','VITC',90,'mg','MALE',19,30),('b440e13e-256b-44d8-bbbb-db1ac3a70a07','Water','WATER',3,'g','FEMALE',51,70),('b492a324-417c-49bd-a7e2-0d1f46e3c946','Fatty acids','FAPU',2,'g','MALE',31,50),('b52ce6b7-f4f1-44c2-8d85-55f49c0adb63','Phosphorus','P',1250,'mg','FEMALE',9,13),('b578ca9c-94d0-48d7-b133-e7a77340ab48','Calcium','CA',1000,'mg','FEMALE',31,50),('b621efee-543f-4d2d-96f3-a1ff3d30cb5f','Fiber','FIBTG',28,'g','PREGNANCY',31,50),('b62d75b7-d4fe-4fa8-8010-d9ab63ba5b48','Vitamin E','TOCPHA',15,'mg','MALE',19,30),('b7efa2a2-c7ad-405f-9200-1f4f84203af8','Fatty acids','FAPU',1,'g','FEMALE',70,100),('b802871e-2252-4098-964d-a64b90faabcd','Fiber','FIBTG',29,'g','LACTATION',14,18),('b85b277d-b22e-4c00-b792-af7603bc6bda','Zinc','ZN',8,'mg','FEMALE',31,50),('b95501c0-4e98-4a30-b554-85c4c4a634d0','Niacin','NIA',14,'mg','FEMALE',31,50),('ba6da60c-8704-44ec-9f0e-536354c14bf0','Vitamin B-12','VITB12',3,'µg','PREGNANCY',14,18),('baefe1a8-6d3b-434f-a068-50c2997b81e5','Water','WATER',4,'g','MALE',70,100),('bafeef13-c2b5-4a40-93cc-463e8b7d5645','Magnesium','MG',320,'mg','FEMALE',51,70),('bb5ebaa5-2097-4715-9a74-a2a48cd62574','Potassium','K',2600,'mg','FEMALE',51,70),('bbef2818-f410-4252-bded-0e216f740c88','Niacin','NIA',16,'mg','MALE',31,50),('bc253de3-259d-408b-bc8d-e0377d620192','Fiber','FIBTG',25,'g','FEMALE',19,30),('bc432fdc-ea22-4f31-8ec9-1633a38868bd','Carbohydrate','CHOCDF',210,'g','LACTATION',14,18),('bc637667-41bf-4582-97cc-9b0cd5b71f4a','Water','WATER',3,'g','MALE',14,18),('bcbebc26-606d-4d92-b163-44fdb3469744','Fatty acids','FAPU',1,'g','PREGNANCY',19,30),('bd281110-3d5e-4efa-95d4-49cf1e6e813d','Riboflavin','RIBF',1,'mg','FEMALE',51,70),('bd2d434d-751b-4976-ac89-031a0960c92c','Sodium','NA',1500,'mg','MALE',31,50),('bd451a20-51b2-4e55-a25a-423adb099672','Fiber','FIBTG',38,'g','MALE',19,30),('bd5a2eea-81ac-428b-b8f3-ed60d1b8e549','Vitamin K','VITK1',75,'µg','MALE',14,18),('bdce7522-f50e-4b6d-93a9-efa9dde61ddb','Protein','PROCNT',46,'g','FEMALE',51,70),('beedf50e-0ef2-456a-bae5-68f096159392','Vitamin D','VITD',15,'µg','LACTATION',31,50),('bfa9a78a-6b60-4dc7-91d5-4cee80b33923','Calcium','CA',1200,'mg','FEMALE',51,70),('c00b42ce-a550-447f-ba86-e170d3ed6d54','Vitamin D','VITD',15,'µg','MALE',9,13),('c06ca05c-5e56-49e2-8fc0-73f2d61487b5','Vitamin A','VITA_RAE',700,'µg','FEMALE',19,30),('c11fb762-a4f8-4719-952d-44e56f294a40','Iron','FE',8,'mg','FEMALE',9,13),('c1df7fb0-3808-4e3a-a029-02b5aa05e082','Magnesium','MG',360,'mg','LACTATION',14,18),('c2356e6a-03f1-4150-895a-46188e7cb086','Zinc','ZN',8,'mg','MALE',9,13),('c2b036be-6d45-4ad7-9084-3bcb628f6862','Vitamin A','VITA_RAE',1300,'µg','LACTATION',19,30),('c2e26157-79bf-4c70-bc0f-a3fab3d25674','Protein','PROCNT',46,'g','FEMALE',14,18),('c2e2ea8c-ff41-42fe-8b86-b2759774cc4f','Fat','FAPU',-1,'g','LACTATION',14,18),('c4417375-d1e6-40ff-9ac9-fa1ef982c07c','Fatty acids','FAPU',2,'g','MALE',51,70),('c4e2b355-f475-4142-866a-409b74a203bb','Fat','FAPU',-1,'g','MALE',19,30),('c5135ab4-c6e9-4213-88c0-3cb66c987b70','Vitamin A','VITA_RAE',700,'µg','FEMALE',70,100),('c564a6cb-7704-42a9-b094-4fa8e1668e49','Folate','FOLFD',400,'µg','MALE',70,100),('c720d9d2-48ff-4386-93d2-36d6c564d4cc','Riboflavin','RIBF',1,'mg','MALE',31,50),('c75b8437-16f6-48e5-82b3-b4e54a15a6bd','Vitamin B-12','VITB12',2,'µg','FEMALE',19,30),('c7970b60-36c6-458d-b15f-606e4f7d8025','Sodium','NA',1000,'mg','CHILDREN',4,8),('c7b50322-cb7d-4d50-a0e2-a411248b0c0c','Magnesium','MG',320,'mg','FEMALE',70,100),('c7fd2337-f6c8-4334-9494-e1acd27309c1','Thiamin','THIA',1,'mg','FEMALE',31,50),('c9074d57-cf0c-49d7-90d9-629412e6be73','Carbohydrate','CHOCDF',130,'g','MALE',70,100),('c916ac07-84a8-48c3-a797-10f4fbcf4ed9','Sodium','NA',1500,'mg','MALE',14,18),('c97c793a-85ff-40b4-9a70-8b49d82a8847','Niacin','NIA',16,'mg','MALE',19,30),('ca313990-7c99-48f6-af36-abeb05700b4a','Folate','FOLFD',150,'µg','CHILDREN',1,3),('ca31b2d4-b0b1-4131-8638-6147b02568cd','Fiber','FIBTG',38,'g','MALE',31,50),('ca62bb6c-5ae7-4dac-96ff-7858fb7307a0','Water','WATER',3,'g','FEMALE',31,50),('ca67f588-215c-4f87-8c5f-59dd9bd830ca','Fatty acids','FAPU',2,'g','MALE',14,18),('cac2d134-1da8-4429-8377-f96ec51dca56','Calcium','CA',1000,'mg','MALE',31,50),('cb09dc89-a465-4af0-a159-4e910b9d7100','Vitamin C','VITC',75,'mg','FEMALE',70,100),('cbafe3d0-4511-47f7-8fba-d0872844e7f9','Iron','FE',7,'mg','CHILDREN',1,3),('ccb2386b-953a-4eaf-948f-f638c585d182','Water','WATER',4,'g','MALE',31,50),('ccfcbded-97c6-4d14-8fcb-30b73392a586','Vitamin E','TOCPHA',15,'mg','MALE',70,100),('cd04ca3f-87e6-4bf1-8f58-98befd23943c','Riboflavin','RIBF',2,'mg','LACTATION',31,50),('cd2daab8-6a89-4617-9335-70e9662f76c3','Calcium','CA',1000,'mg','PREGNANCY',19,30),('cd4ec0cf-c4ec-49f9-b2c1-63fac2e83883','Vitamin D','VITD',15,'µg','FEMALE',19,30),('cd5fe3de-503d-4473-a7b7-7dc989ebc285','Vitamin B-6','VITB6A',2,'mg','LACTATION',19,30),('ce76c07a-f7fc-4e38-a8b3-65d5b5c6e15b','Zinc','ZN',5,'mg','CHILDREN',4,8),('cec5c362-ee03-4f83-ac40-39f7476143c0','Water','WATER',4,'g','MALE',51,70),('cfaf9cbc-b2a8-4b8c-85f4-5b10ffc0d94c','Iron','FE',11,'mg','MALE',14,18),('d024953f-b840-49aa-a75d-0d6b7e904a03','Sodium','NA',1500,'mg','FEMALE',70,100),('d030d1cd-3af3-412d-92bd-2843892f21a7','Phosphorus','P',700,'mg','MALE',19,30),('d293669f-2e63-4999-ad03-888bccdea4c1','Riboflavin','RIBF',1,'mg','PREGNANCY',19,30),('d4aa4e9d-afe3-43a2-bc9d-37c1acbfa9c9','Zinc','ZN',12,'mg','LACTATION',31,50),('d4c41764-e871-47f0-a45f-b581fc74a290','Vitamin A','VITA_RAE',750,'µg','PREGNANCY',14,18),('d5527f9a-e4d5-4866-87d6-bab5f478d1be','Vitamin B-6','VITB6A',1,'mg','FEMALE',14,18),('d569e1da-3c81-4588-ba26-9247fd26c987','Fat','FAPU',-1,'g','MALE',9,13),('d60145a7-66a3-41b4-aa53-e426fa437f98','Fat','FAPU',-1,'g','MALE',70,100),('d6f71a58-adcf-4aac-9608-7ac1a65ea5ae','Vitamin B-12','VITB12',2,'µg','MALE',19,30),('d752b57f-a587-470a-9ac4-d1b19208847d','Vitamin C','VITC',75,'mg','FEMALE',31,50),('d7aead1d-521f-4f12-9571-451f4e34443b','Fiber','FIBTG',29,'g','LACTATION',19,30),('d8b5e37a-da60-42dc-8858-060fcb6d8464','Vitamin B-12','VITB12',2,'µg','FEMALE',9,13),('d93e110f-59dd-4a48-ba2b-155e1ae4cad8','Folate','FOLFD',400,'µg','FEMALE',19,30),('d9ff8aff-5868-4314-abde-09803f5b3416','Zinc','ZN',11,'mg','MALE',70,100),('da303c7d-68d3-4ef5-8ad0-7a2191d9fe54','Thiamin','THIA',1,'mg','PREGNANCY',31,50),('da5af552-e768-460e-951d-4658688b58e0','Vitamin C','VITC',45,'mg','FEMALE',9,13),('db288bf2-1cd8-493e-9fa7-4f5e5a7b7632','Zinc','ZN',13,'mg','LACTATION',14,18),('db6e727d-cb27-4223-ad11-d8677310641a','Sodium','NA',1500,'mg','PREGNANCY',14,18),('dbf20fdc-3670-4319-ab65-a45af7d794cc','Vitamin K','VITK1',90,'µg','FEMALE',31,50),('dd0ea54e-cb84-4f04-bc04-859803543cf8','Fatty acids','FAPU',1,'g','LACTATION',14,18),('dd5dda91-8b99-4348-b365-59c18c3470ff','Folate','FOLFD',400,'µg','FEMALE',70,100),('dd859f51-404d-45c6-86d3-a141dd890122','Calcium','CA',1000,'mg','CHILDREN',4,8),('dde15cf7-f5be-4641-b067-7339edc21682','Magnesium','MG',360,'mg','FEMALE',14,18),('de3c809a-4d86-4278-859f-035fd6521797','Vitamin D','VITD',15,'µg','MALE',31,50),('df384a8c-5287-43e4-b3bd-e3c913a1c2fa','Fat','FAPU',-1,'g','CHILDREN',4,8),('df53b044-2748-4d2d-bdea-b3c0973e3379','Riboflavin','RIBF',1,'mg','MALE',14,18),('df58449e-030e-4cbe-a706-3cc45ee23140','Protein','PROCNT',52,'g','MALE',14,18),('df66d49b-ff69-4455-bc03-55a80d96fed8','Vitamin E','TOCPHA',19,'mg','LACTATION',31,50),('df8937f5-8af5-43a0-a25a-02cd46ed53cc','Carbohydrate','CHOCDF',130,'g','MALE',19,30),('e0e9077f-9af7-4fbe-a8ec-a2a9071fa42f','Vitamin B-12','VITB12',2,'µg','FEMALE',31,50),('e13edc6e-ad0a-4aa6-822d-78a3c999aeae','Vitamin D','VITD',20,'µg','FEMALE',70,100),('e14ebedb-790c-4100-a8b0-91affc4e29cd','Niacin','NIA',17,'mg','LACTATION',14,18),('e27848c9-b31f-43b4-8662-c0907343b4a9','Thiamin','THIA',1,'mg','MALE',51,70),('e27dd61e-685f-49bd-b544-68f39708c5db','Vitamin B-6','VITB6A',2,'mg','LACTATION',31,50),('e2997173-9511-4894-90f1-48558a94e028','Sodium','NA',1500,'mg','FEMALE',14,18),('e2d2f2ef-eca3-4cdd-8062-d6f3307411a3','Thiamin','THIA',1,'mg','FEMALE',51,70),('e3343f34-2f8c-4c10-9ab4-3df6d6c7fa4f','Magnesium','MG',310,'mg','FEMALE',19,30),('e435a52d-738f-46de-a211-5e9725644bfd','Vitamin D','VITD',15,'µg','FEMALE',9,13),('e4a81572-172a-4cda-a28c-94e5137da064','Zinc','ZN',11,'mg','PREGNANCY',19,30),('e4c47976-0c72-4eef-ad90-4d5c995a81f8','Folate','FOLFD',300,'µg','MALE',9,13),('e59202cc-ff35-42f9-8245-3b7a289bb8d5','Folate','FOLFD',400,'µg','FEMALE',51,70),('e6773825-2a1a-4a9e-88fd-20dcc4f00e0b','Iron','FE',8,'mg','FEMALE',51,70),('e6a70882-aa9d-499d-91c3-8e02ee009a3e','Fatty acids','FAPU',1,'g','FEMALE',9,13),('e6f87def-29f6-4efe-a279-7d9b341774d9','Vitamin C','VITC',65,'mg','FEMALE',14,18),('e719b050-7cd9-4953-b09b-fc5b7f2a6e64','Vitamin A','VITA_RAE',700,'µg','FEMALE',14,18),('e7feb515-0c29-45c9-9940-daefe30e23f6','Vitamin A','VITA_RAE',600,'µg','MALE',9,13),('e8e541bb-ffa4-4f5c-a861-c1afaaad2064','Riboflavin','RIBF',1,'mg','FEMALE',9,13),('e99f8b1e-aa25-4fd2-a625-8d9d5e844cab','Vitamin C','VITC',15,'mg','CHILDREN',1,3),('ea5eff93-890e-4884-b390-71e61b21ac56','Phosphorus','P',700,'mg','FEMALE',70,100),('ea88365b-778e-4fcc-a738-dd0a47dd02b5','Zinc','ZN',8,'mg','FEMALE',9,13),('ecf1b823-2450-43df-abdf-791fde97d3cf','Fiber','FIBTG',21,'g','FEMALE',51,70),('ed071249-ec08-4408-bdff-c0747ff82e05','Iron','FE',8,'mg','MALE',19,30),('ee33bdd5-d3b5-40c8-8f4e-fb2bc63ac6d9','Vitamin K','VITK1',120,'µg','MALE',51,70),('efb44d74-6ea4-4c19-9051-80fa6ff65d35','Vitamin B-6','VITB6A',2,'mg','MALE',51,70),('f06e8ad3-783c-490c-b70a-56eb83be6548','Fatty acids','FAPU',1,'g','FEMALE',31,50),('f1520f36-3090-44da-8371-bc03b74ee24f','Protein','PROCNT',56,'g','MALE',31,50),('f18f73d3-32b2-455e-b305-ba1672d33e59','Sodium','NA',1200,'mg','FEMALE',9,13),('f1922356-1b81-4856-aef8-6b1f11af6374','Vitamin D','VITD',15,'µg','PREGNANCY',31,50),('f1a34a40-b6ac-41d4-9119-0c4fa8d8f767','Sodium','NA',1500,'mg','FEMALE',31,50),('f230f70f-5193-4338-9bc9-ddf3a11d76e3','Calcium','CA',1000,'mg','LACTATION',31,50),('f36c4150-17d9-4409-a8d6-780a5a3fd956','Fatty acids','FAPU',1,'g','LACTATION',19,30),('f395def3-c227-4bfd-a1d9-d69bc4a4b28a','Iron','FE',8,'mg','FEMALE',70,100),('f471218e-9943-4c00-97b1-9607b8de29bd','Carbohydrate','CHOCDF',175,'g','PREGNANCY',19,30),('f5851429-dc69-44b6-848d-896a5c680dad','Vitamin B-6','VITB6A',1,'mg','MALE',31,50),('f5957b32-3af8-491b-bbec-1080b7049f9b','Fatty acids','FAPU',1,'g','PREGNANCY',14,18),('f6870fc3-6c4c-49f9-9f0b-29f0a8c9372a','Vitamin K','VITK1',120,'µg','MALE',19,30),('f6ceec3a-429f-4d75-b839-65f37775769d','Fat','FAPU',-1,'g','CHILDREN',1,3),('f6d25c02-3212-4a11-83ba-4f43fdaf6b9f','Vitamin E','TOCPHA',15,'mg','FEMALE',19,30),('f74016ad-5b79-4f7b-8e7d-707f668e1156','Vitamin D','VITD',15,'µg','MALE',19,30),('f9a9d752-f914-4132-a14e-b767613b497a','Protein','PROCNT',46,'g','FEMALE',19,30),('fa1173de-84df-4d20-a206-e2131f2b1eaa','Fatty acids','FAPU',1,'g','PREGNANCY',31,50),('faa80a90-464a-454c-b524-ed71a796bbd9','Vitamin B-12','VITB12',2,'µg','MALE',51,70),('fb29e376-4824-4c0c-8a01-dc08b6407523','Magnesium','MG',240,'mg','MALE',9,13),('fcfb7593-da35-4bb3-b8f0-360fbef4d23a','Vitamin K','VITK1',55,'µg','CHILDREN',4,8),('fd426b6d-c227-407c-9847-84217fd65986','Vitamin B-6','VITB6A',2,'mg','MALE',70,100),('fd76d32b-98fa-4f57-ab29-87afdb17c46b','Folate','FOLFD',600,'µg','PREGNANCY',31,50),('fdf3f998-9b66-49ee-b2bf-15752becfa55','Riboflavin','RIBF',1,'mg','MALE',9,13),('fe26efcd-3ede-4b06-b467-5970ebc351ca','Fatty acids','FAPU',1,'g','MALE',9,13),('ff2d7386-cf56-4105-8957-59e2c00a9c94','Potassium','K',2300,'mg','FEMALE',9,13),('fff4bf8b-d34e-4049-b3cc-4ca21dcfec00','Water','WATER',3,'g','FEMALE',70,100);
/*!40000 ALTER TABLE `nutrition_recomendation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_diet_label`
--

DROP TABLE IF EXISTS `recipe_diet_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_diet_label` (
  `id` varchar(36) NOT NULL,
  `label` varchar(255) NOT NULL,
  `recipeId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_5fab2ef76df46c5aa6bec7d3a6c` (`recipeId`),
  CONSTRAINT `FK_5fab2ef76df46c5aa6bec7d3a6c` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_diet_label`
--

LOCK TABLES `recipe_diet_label` WRITE;
/*!40000 ALTER TABLE `recipe_diet_label` DISABLE KEYS */;
INSERT INTO `recipe_diet_label` VALUES ('85b9cec7-b2fc-47d8-b243-bf4f11020c82','HIGH_FIBER','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('bddaab4d-1118-465f-9464-4ab852eb17f2','LOW_CARB','3cd3f061-f3bc-4042-84c6-bb5f13722996');
/*!40000 ALTER TABLE `recipe_diet_label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_health_label`
--

DROP TABLE IF EXISTS `recipe_health_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_health_label` (
  `id` varchar(36) NOT NULL,
  `label` varchar(255) NOT NULL,
  `recipeId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_f67ef976548ecc6d684e5c3d614` (`recipeId`),
  CONSTRAINT `FK_f67ef976548ecc6d684e5c3d614` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_health_label`
--

LOCK TABLES `recipe_health_label` WRITE;
/*!40000 ALTER TABLE `recipe_health_label` DISABLE KEYS */;
INSERT INTO `recipe_health_label` VALUES ('02fa54ea-2f29-4e8a-baf3-3865381f4a39','MOLLUSK_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('087457fa-e68c-4766-8b21-ce259d44bdb3','NO_SUGAR_ADDED','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('09457292-bb0a-4a4a-bb03-9defa4a510c8','EGG_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('0c032770-2bc0-450d-b23c-8bea7e3a659e','SULPHITE_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('0e855d03-dc3c-459c-99fe-a10b386d108b','KOSHER','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('11ee2d63-c729-4577-a1bc-b0a90dae674b','DAIRY_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('18ace0f6-55e7-41c9-a2ae-530387350ae8','SUGAR_CONSCIOUS','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('1d0edba5-bbcc-44ff-a517-b670e5958ff9','LUPINE_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('210a7fd1-fed1-474c-a0ce-88e3376445c3','MOLLUSK_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('2a30039a-89aa-4056-abfb-3e88f3500a48','KIDNEY_FRIENDLY','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('31b14488-df7b-46c1-b12b-d1b04f3e2e4d','RED_MEAT_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('44cff25d-8814-4daf-891c-71ba70ce1b67','FISH_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('4640b836-9d59-45bf-914d-ef1229e059eb','SHELLFISH_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('4b06fd35-0b0e-49ba-a5fd-913f9818441d','MEDITERRANEAN','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('4d9eab8c-f7bb-4162-b9dc-dffc7fcfa415','SOY_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('54739e0c-5fef-4c8b-bd3f-6a6b44ae7c27','PORK_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('59b7852b-32ec-4aba-ae87-6dcce1c6af28','RED_MEAT_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('5b92c2a3-aecc-4e46-b356-a60092a332d5','PORK_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('5d9f0348-8ddf-4eba-85e2-c3311d8eb368','SESAME_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('65895c08-687f-4bfc-8ba8-b15d707b04ea','MILK_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('732e5ab8-5ceb-4cd4-9427-4e919775020e','CRUSTACEAN_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('73d2ca0e-a90c-4185-95e4-63eedc97ffe7','GLUTEN_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('75bbb68a-38a3-4489-9ab6-9fbb55ea6a78','ALCOHOL_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('798a1b8b-fea2-4bb2-a5fd-06a38a5888db','CELERY_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('840bb480-fa9e-48bd-9a42-003ab123c24f','ALCOHOL_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('85875ba0-2438-44c5-b81c-8e572f0ce030','LOW_POTASSIUM','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('868c5fe3-9b09-485b-a7e5-e6f60e1df8f6','CRUSTACEAN_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('94141e71-ac9d-4170-9ea9-78b806fe1d8a','PESCATARIAN','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('96b3a977-6df9-470b-a794-ad117484d6ca','VEGETARIAN','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('9b7e39da-d00e-4ae8-87cb-00f3d8b36784','CELERY_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('9e68075d-5f1a-4982-a7e0-b57204743ee5','KOSHER','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('a1488154-abc2-45be-8861-c32c945b4eb8','VEGETARIAN','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('a20f9a67-b593-42ad-83e0-62aeabb42863','LUPINE_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('aed4b254-c1e7-4458-a657-2b3775b477d9','PEANUT_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('b1dd3384-02e8-4dbe-87ef-c1b7d1a79a0a','KETO_FRIENDLY','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('b6e1764c-54a5-49b5-ae90-8d383577e857','TREE_NUT_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('bee32e06-f847-4977-9ba3-1ef4b06109a8','PEANUT_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('c3d3302b-63c5-458d-927d-66b550c51d5b','SOY_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('cb771a37-5bb4-439c-b546-195eea0861dd','SULPHITE_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('d5f75b51-c152-43d0-a961-878103e4e1f9','TREE_NUT_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('d950d7ba-fb0f-4fd2-aaf3-cdd159a8f27d','MUSTARD_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('dc2b7531-cbf2-49d4-bb87-85984d54ac45','VEGAN','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('dd58cb45-6ca3-45af-b3d6-cf90b6614d99','SHELLFISH_FREE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('e0759d5c-181c-40d2-a896-1333322cb4ed','WHEAT_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('e871cec6-5ea2-4007-bf96-a9504248d1a8','SESAME_FREE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('fe91a3ac-0ca5-4be1-b996-0a0bac4f7bc8','NO_SUGAR_ADDED','ce7c42d8-f557-42e1-8e53-d9925bcafd3b');
/*!40000 ALTER TABLE `recipe_health_label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_total_daily`
--

DROP TABLE IF EXISTS `recipe_total_daily`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_total_daily` (
  `id` varchar(36) NOT NULL,
  `label` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `recipeId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_99293fcaeac796b52559d874426` (`recipeId`),
  CONSTRAINT `FK_99293fcaeac796b52559d874426` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_total_daily`
--

LOCK TABLES `recipe_total_daily` WRITE;
/*!40000 ALTER TABLE `recipe_total_daily` DISABLE KEYS */;
INSERT INTO `recipe_total_daily` VALUES ('00bc6320-18ef-4852-8418-b38069b3b3ff','Niacin (B3)','NIA','%',170,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('011d4d83-b207-4d93-a140-f0435e7c2989','Potassium','K','%',2,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('025a4474-a872-40a4-8603-d291eb1b5a78','Cholesterol','CHOLE','%',11,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('03b496e9-db4d-4eb2-83d3-0eed879f7c29','Energy','ENERC_KCAL','%',228,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('10301d70-581c-4256-a7a9-0e1513432b99','Cholesterol','CHOLE','%',0,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('1b324b70-233c-4fe5-a1db-9718ecb6d264','Protein','PROCNT','%',12,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('1fb81aaf-ad55-4dbc-8394-209d92f2c28d','Carbs','CHOCDF','%',269,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('237ac37b-5cdf-4acd-957d-dd8156ee22aa','Vitamin K','VITK1','%',1181,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('25878bc6-71e5-4dd6-a033-8b414446ea5f','Phosphorus','P','%',526,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('34f0e1f6-0d77-40cd-9ba0-8d906f2ee7dc','Sodium','NA','%',30,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('36a2ff51-39c8-4172-9c2d-9f6448cfd24f','Carbs','CHOCDF','%',2,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('3c46dc25-9ae5-4366-8373-9246a169d7a3','Niacin (B3)','NIA','%',1,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('3f2a8a7b-38e4-4e30-90dc-6d7a93d2dd57','Vitamin A','VITA_RAE','%',1001,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('42283457-c464-4130-a5ff-07414e92faf6','Vitamin B12','VITB12','%',0,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('43ada23a-7627-4618-8783-0cebfcab5f48','Saturated','FASAT','%',50,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('4451d1fe-96a5-4a57-8df0-deaed3116878','Vitamin A','VITA_RAE','%',0,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('4bc48929-d94f-4efd-ab4b-ed33641c55c3','Zinc','ZN','%',273,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('5128b992-0dba-45cd-8212-204ff861d02a','Vitamin B6','VITB6A','%',614,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('51589e7f-e209-4e98-b8ff-4ed2329808e5','Fat','FAT','%',126,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('593647b2-971b-4513-bfb5-077c711979d2','Vitamin C','VITC','%',728,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('59f301d8-8061-473f-bbff-80d898f6177c','Magnesium','MG','%',363,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('62d564d1-7d3e-4896-83d2-5ba861c58222','Folate equivalent (total)','FOLDFE','%',2,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('6496158a-6a8c-481e-8821-0668ff6bd1e9','Thiamin (B1)','THIA','%',583,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('728ade65-f7b5-4492-bd84-ab1b350aa932','Energy','ENERC_KCAL','%',24,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('7c99ed73-76a1-40d8-953d-292ec07fd0a1','Calcium','CA','%',134,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('7e5a67d7-708f-4197-8284-3ceb0f05e043','Fat','FAT','%',75,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('81d36a85-0923-4e42-a85c-36dc73e7efde','Vitamin C','VITC','%',16,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('848d5f83-3597-4981-b1cd-7f4026545bf6','Folate equivalent (total)','FOLDFE','%',946,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('894f2e72-4f68-41d7-abb8-db5178d8e9f6','Vitamin B6','VITB6A','%',5,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('8e3e1037-f792-4c36-9b4c-509d14f6c792','Phosphorus','P','%',3,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('8face1f2-847b-490e-afb2-37954f87bcfd','Vitamin E','TOCPHA','%',172,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('90a3c70a-957b-4cd8-bd60-77c14fb548c0','Zinc','ZN','%',1,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('997d6405-51f3-4b91-ba0d-47bf2eea9ad5','Riboflavin (B2)','RIBF','%',2,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('9b0998a5-4d6a-4b1c-997d-8712d10a749d','Saturated','FASAT','%',45,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('a6d9be82-ec26-4ab0-9fe6-5fc4063c51ef','Magnesium','MG','%',3,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('a971eae5-7924-434b-bb08-1cc792ecddd2','Fiber','FIBTG','%',565,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('bf673ab8-2995-43c8-88d2-62511c08d54e','Vitamin D','VITD','%',0,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('c1cdac70-d7a2-4851-83bd-54a82fffc7f0','Protein','PROCNT','%',358,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('c1f817a4-5307-43a7-b794-3e092a3b3e3f','Vitamin E','TOCPHA','%',1,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('c4271aa8-02f7-4269-874d-a2eb9ef1b3a0','Vitamin D','VITD','%',0,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('d67643fb-6147-40f9-a3ea-9302e5ae4fd9','Vitamin K','VITK1','%',4,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('d92998a0-d151-4e50-b925-6aff913d9eb0','Riboflavin (B2)','RIBF','%',259,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('dce87eb0-8987-4dd7-a8e2-38682b8f995d','Iron','FE','%',4,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('de84c4b3-dad4-4e74-8225-5c14a689fe08','Vitamin B12','VITB12','%',0,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('e0ec50c5-de15-45a5-95a6-4119a65553f6','Calcium','CA','%',8,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('f11f3fa0-c19a-4b9e-bb44-e2cac16ce94d','Fiber','FIBTG','%',6,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('f416ed91-2d5d-4fa1-b890-132c08ea1a8b','Potassium','K','%',259,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('f5cd6e81-e975-4a07-a74c-cda4d0504198','Iron','FE','%',308,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('f9f35d41-6485-4d76-af47-b2970212e27e','Thiamin (B1)','THIA','%',2,'3cd3f061-f3bc-4042-84c6-bb5f13722996'),('fd49ee1e-7116-4649-92c9-55f51e821c52','Sodium','NA','%',372,'ce7c42d8-f557-42e1-8e53-d9925bcafd3b');
/*!40000 ALTER TABLE `recipe_total_daily` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_total_nutrition`
--

DROP TABLE IF EXISTS `recipe_total_nutrition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_total_nutrition` (
  `id` varchar(36) NOT NULL,
  `label` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `unit` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `recipeId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_46976ae35e71554ae3beea13c4b` (`recipeId`),
  CONSTRAINT `FK_46976ae35e71554ae3beea13c4b` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_total_nutrition`
--

LOCK TABLES `recipe_total_nutrition` WRITE;
/*!40000 ALTER TABLE `recipe_total_nutrition` DISABLE KEYS */;
INSERT INTO `recipe_total_nutrition` VALUES ('01e88084-554c-4aae-bb85-afc857f56e60','Sodium, Na',712,'mg','NA','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('05e2e7f5-8b0d-4c2b-9d92-e9b77f6548ee','Protein',179,'g','PROCNT','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('1359fb09-3ef6-4b70-b3e3-674dd3e366e0','Fatty acids, total monounsaturated',33,'g','FAMS','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('1443270d-8855-4fcd-89f2-97f45a318034','Folate, DFE',8,'µg','FOLDFE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('151ddd62-6845-40d3-afd6-17db2cc709ee','Vitamin D (D2 + D3)',0,'µg','VITD','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('1a307b34-2a5a-4ab0-8ee8-ec5705b20421','Thiamin',0,'mg','THIA','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('23c7da4e-4f19-4a04-8872-b85ad71541fb','Vitamin K (phylloquinone)',1418,'µg','VITK1','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('24bfae16-1cad-48bd-bf46-abbc99fb7425','Fatty acids, total trans',0,'g','FATRN','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('26f823ac-a0df-4cd9-9939-48a744617789','Water',2726,'g','WATER','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('2a9d7abc-ef48-44e0-917a-fb029edc044b','Folate, food',8,'µg','FOLFD','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('2c713681-b252-4bfb-8d93-19f7fe58c4e2','Vitamin C, total ascorbic acid',655,'mg','VITC','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('313224a3-028f-4345-8c9f-01b559cbcb92','Carbohydrate, by difference',808,'g','CHOCDF','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('329419bf-d5ad-4bf1-a08c-7d53425f536c','Fatty acids, total saturated',10,'g','FASAT','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('36c2d33c-16a4-4e4c-a80c-006a345f9e50','Fatty acids, total polyunsaturated',29,'g','FAPU','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('388e1aa4-b89b-4558-8fbe-21fc827fa31f','Sugars, total',126,'g','SUGAR','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('3a780d93-11cd-4821-a84b-b4f1a41e0367','Vitamin C, total ascorbic acid',15,'mg','VITC','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('426501d5-c302-4f12-98a9-8a83bb8b904d','Vitamin E (alpha-tocopherol)',26,'mg','TOCPHA','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('453f0e37-06cd-423e-9a02-eca412e60037','Energy',483,'kcal','ENERC_KCAL','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('4bf63340-a3e0-42c3-a182-770097851b57','Energy',4558,'kcal','ENERC_KCAL','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('4ce20c95-c6c2-44d7-a5e6-77cc520cebe9','Vitamin B-6',0,'mg','VITB6A','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('5063a48a-1605-4ea5-8e90-a139c8bc59c6','Vitamin B-12',0,'µg','VITB12','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('56bf4082-a535-4feb-a4f2-09a801dbde1d','Niacin',27,'mg','NIA','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('5b97d2c2-ea60-46eb-b007-1cf7323d7931','Folate, food',3783,'µg','FOLFD','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('5e16bd84-0288-4b0d-9916-f51bef8f432c','Zinc, Zn',30,'mg','ZN','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('5e93db02-0c75-462a-baa9-3bc16b6f1e67','Vitamin A, RAE',3,'µg','VITA_RAE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('6b28433d-ea5c-40c7-bba4-7854bcc57ccf','Vitamin D (D2 + D3)',0,'µg','VITD','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('6f1fc29c-341b-4b3b-a951-3a1c6fe0fe94','Iron, Fe',55,'mg','FE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('759b61ff-724a-4c8a-bbb7-c3f938365958','Phosphorus, P',18,'mg','P','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('7e1ed7f0-120f-451a-a156-7059c601695f','Folic acid',0,'µg','FOLAC','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('7e4b9574-abaa-42c7-be91-e72ca35bee2c','Fiber, total dietary',1,'g','FIBTG','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('853c6db4-93ab-4d16-91fa-abd64b85055f','Protein',6,'g','PROCNT','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('8ce0f512-1862-495f-914c-a5d055e9273b','Fatty acids, total monounsaturated',11,'g','FAMS','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('8f1e8d3f-3f1a-455d-a61f-95384c4d6199','Vitamin E (alpha-tocopherol)',0,'mg','TOCPHA','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('935247fd-6b30-4c70-98e7-c7c74f659097','Vitamin B-6',8,'mg','VITB6A','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('95132ef5-9fea-4fec-935b-c57b2f7947ed','Sugars, total',4,'g','SUGAR','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('991e6672-ef79-407c-b1d2-1e9269fae581','Fatty acids, total polyunsaturated',27,'g','FAPU','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('a55b5bfb-a634-490f-812a-aa5ba9315388','Magnesium, Mg',1524,'mg','MG','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('a772e985-545f-4a35-85ae-cd81c04536f0','Water',45,'g','WATER','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('aa45fe9f-7bda-47e6-b94b-e636ced95b25','Fiber, total dietary',141,'g','FIBTG','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('af027c8d-03d1-45c4-956b-1e10a21cb6dd','Fatty acids, total trans',0,'g','FATRN','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('af285fbc-4f1b-47fd-a31d-fdb2a31654ab','Fatty acids, total saturated',9,'g','FASAT','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('b1500b1d-452c-47e8-9c93-57c76eab528e','Total lipid (fat)',49,'g','FAT','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('b22474af-f3f8-4f06-80ef-31258ab86c12','Thiamin',7,'mg','THIA','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('b2333389-76cf-44eb-a756-e7e5497dc35c','Magnesium, Mg',12,'mg','MG','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('b34440c4-679b-4039-9b6a-a632fa6d3a42','Riboflavin',3,'mg','RIBF','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('b4aade1d-ba8b-4aac-ad59-1fd965464744','Calcium, Ca',1344,'mg','CA','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('b60aefbe-eba3-43f8-8acb-25bd0eae6d2e','Vitamin A, RAE',9005,'µg','VITA_RAE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('b9402e2f-45b0-48b6-a3f3-7744e7439862','Cholesterol',32,'mg','CHOLE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('c28a564d-5d61-41bd-9957-130de746288b','Potassium, K',105,'mg','K','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('c2f120e1-5519-4678-8040-36bf0e078f2a','Riboflavin',0,'mg','RIBF','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('cac8a4c8-310e-49a6-8bf4-04076a4889f5','Cholesterol',0,'mg','CHOLE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('cb5f2979-c09c-4c70-abf5-6d67d02c4454','Total lipid (fat)',82,'g','FAT','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('cff87068-246f-4d9b-bec4-106b913b55aa','Niacin',0,'mg','NIA','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('d41b0457-6e20-49c1-9a9c-ec647475e5b0','Zinc, Zn',0,'mg','ZN','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('d42707fa-2dff-4163-b175-e1693e2d5e09','Calcium, Ca',84,'mg','CA','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('d56525f6-41f7-4c49-852d-0b1d8a8ebbbe','Folate, DFE',3783,'µg','FOLDFE','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('d781da8f-1d3e-4314-8231-a9d1bd000b66','Phosphorus, P',3680,'mg','P','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('da19b4db-72a3-46aa-b350-e75770601c91','Iron, Fe',1,'mg','FE','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('e0bd763b-9323-457b-8914-25bf9f20be26','Carbohydrate, by difference',7,'g','CHOCDF','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('e5e48a70-9c16-4228-8eb7-24f1ecd586d2','Vitamin B-12',0,'µg','VITB12','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('e695ddc6-7c36-4ea3-bffa-806c3b90f56c','Sodium, Na',8928,'mg','NA','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('ebdd1f01-3a71-4d8d-a02b-3f301d3fb287','Vitamin K (phylloquinone)',5,'µg','VITK1','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('f5b3492d-fe82-444f-97bc-d23be9b5620d','Potassium, K',12159,'mg','K','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('fe884947-4724-4d92-80e3-e951726d8387','Folic acid',0,'µg','FOLAC','3cd3f061-f3bc-4042-84c6-bb5f13722996');
/*!40000 ALTER TABLE `recipe_total_nutrition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_total_nutrition_kcal`
--

DROP TABLE IF EXISTS `recipe_total_nutrition_kcal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_total_nutrition_kcal` (
  `id` varchar(36) NOT NULL,
  `label` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `unit` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `recipeId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_035f84d50d40b53d4cd7d980eb1` (`recipeId`),
  CONSTRAINT `FK_035f84d50d40b53d4cd7d980eb1` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_total_nutrition_kcal`
--

LOCK TABLES `recipe_total_nutrition_kcal` WRITE;
/*!40000 ALTER TABLE `recipe_total_nutrition_kcal` DISABLE KEYS */;
INSERT INTO `recipe_total_nutrition_kcal` VALUES ('28be811c-dcb4-401f-bf5c-0f286a8a8c97','Calories from carbohydrates',3144,'kcal','CHOCDF_KCAL','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('4325e569-10e1-4344-9c73-eb7d1d528258','Calories from carbohydrates',29,'kcal','CHOCDF_KCAL','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('517e7a62-0921-4c41-b5e8-3e3b46918a02','Energy',4558,'kcal','ENERC_KCAL','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('6856a1f8-49b8-4336-9539-02829dbed357','Calories from fat',429,'kcal','FAT_KCAL','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('80e9d1bc-e0a6-49ef-bba3-a6700bea6601','Energy',482,'kcal','ENERC_KCAL','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('9c1e0e99-6ef7-4b24-91df-16e49d2ca5c4','Calories from protein',24,'kcal','PROCNT_KCAL','3cd3f061-f3bc-4042-84c6-bb5f13722996'),('d078e169-74e4-444b-9d91-650d4b4d4344','Calories from protein',697,'kcal','PROCNT_KCAL','ce7c42d8-f557-42e1-8e53-d9925bcafd3b'),('db0839c3-cadf-4524-9a51-99866e667a39','Calories from fat',717,'kcal','FAT_KCAL','ce7c42d8-f557-42e1-8e53-d9925bcafd3b');
/*!40000 ALTER TABLE `recipe_total_nutrition_kcal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `serving` int DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `cook` varchar(255) DEFAULT NULL,
  `prep` varchar(255) DEFAULT NULL,
  `total` varchar(255) DEFAULT NULL,
  `url` varchar(255) NOT NULL,
  `public` tinyint NOT NULL DEFAULT '1',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_19d2684dbf4692a00e0ca73578` (`url`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES ('3cd3f061-f3bc-4042-84c6-bb5f13722996','Tartar Sauce',NULL,'Tartar_Sauce.jpg','','','','https://tastesbetterfromscratch.com/tartar-sauce/',1,'2022-03-06 02:44:17.897809','This homemade Tartar Sauce recipe is creamy and fresh! It only takes 5 minutes to make, and tastes so much better than store-bought!'),('ce7c42d8-f557-42e1-8e53-d9925bcafd3b','Moroccan-inspired chickpea stew',NULL,'Moroccan-inspired_chickpea_stew.jpg','','45 min.','','https://www.kitchenstories.com/en/recipes/moroccan-inspired-chickpea-stew',1,'2022-03-06 00:56:48.735727','Peel and finely dice onion and garlic. Peel carrots and sweet potatoes and cut into bite-size pieces. Deseed and dice bell pepper. Remove leaves and core from fennel and chop rest into small pieces. Wash kale, remove leaves from stems, and cut or tear into bite-size pieces.');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes_categories`
--

DROP TABLE IF EXISTS `recipes_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes_categories` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes_categories`
--

LOCK TABLES `recipes_categories` WRITE;
/*!40000 ALTER TABLE `recipes_categories` DISABLE KEYS */;
INSERT INTO `recipes_categories` VALUES ('105ffb72-9d29-42fa-8c0d-e20284c9ff47','Juices','🥤',1),('277b3ac2-8e28-4e0b-976a-8cd430a51ef8','Salad','🥗',1),('87adce8d-ac5d-4feb-b543-7ea6c9a1f6cf','Soups','🍜',1),('8d428f6e-7a48-488a-b82f-b76293dc4d0c','Sauces','🥣',1),('9e5f81d0-882e-46ac-b710-0c5ef3711aaf','Baking','🍰',1),('b2ae91d1-a112-465b-805b-2a8e08b9d306','Dinner','🍲',1),('c7c8b49d-5604-41a6-be68-9f969eb9cbb0','Snaks','🥨',1),('ca8a71f8-94eb-400d-a1e0-53f2039eb746','Breakfast','🍳',1),('cea5fa80-99d1-4c63-be5b-90ee2dbf1731','Lunch','🥘',1);
/*!40000 ALTER TABLE `recipes_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes_categories_recipes_categories`
--

DROP TABLE IF EXISTS `recipes_categories_recipes_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes_categories_recipes_categories` (
  `recipesId` varchar(36) NOT NULL,
  `recipesCategoriesId` varchar(36) NOT NULL,
  PRIMARY KEY (`recipesId`,`recipesCategoriesId`),
  KEY `IDX_31c4451385cd72cb24a859759c` (`recipesId`),
  KEY `IDX_745485893309492dd13113b0f0` (`recipesCategoriesId`),
  CONSTRAINT `FK_31c4451385cd72cb24a859759c0` FOREIGN KEY (`recipesId`) REFERENCES `recipes` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_745485893309492dd13113b0f0e` FOREIGN KEY (`recipesCategoriesId`) REFERENCES `recipes_categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes_categories_recipes_categories`
--

LOCK TABLES `recipes_categories_recipes_categories` WRITE;
/*!40000 ALTER TABLE `recipes_categories_recipes_categories` DISABLE KEYS */;
INSERT INTO `recipes_categories_recipes_categories` VALUES ('3cd3f061-f3bc-4042-84c6-bb5f13722996','b2ae91d1-a112-465b-805b-2a8e08b9d306'),('3cd3f061-f3bc-4042-84c6-bb5f13722996','cea5fa80-99d1-4c63-be5b-90ee2dbf1731'),('ce7c42d8-f557-42e1-8e53-d9925bcafd3b','b2ae91d1-a112-465b-805b-2a8e08b9d306');
/*!40000 ALTER TABLE `recipes_categories_recipes_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record` (
  `id` varchar(36) NOT NULL,
  `time` datetime NOT NULL,
  `value` int NOT NULL,
  `categoryId` int DEFAULT NULL,
  `userId` varchar(36) DEFAULT NULL,
  `date` datetime NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  KEY `FK_73168a64f6e1844723c2b180cee` (`categoryId`),
  KEY `FK_8675cd3761984947c2506f39a25` (`userId`),
  CONSTRAINT `FK_73168a64f6e1844723c2b180cee` FOREIGN KEY (`categoryId`) REFERENCES `record_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_8675cd3761984947c2506f39a25` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
INSERT INTO `record` VALUES ('0edd6275-ab10-431f-bb6c-85c93fc2fcd0','2022-03-06 03:09:17',200,6,'5b6683dc-4f86-4247-8ac1-22a1910d5a9e','2022-03-06 03:09:17','2022-03-07 15:56:12.756581'),('265fb0a9-13f4-459f-9ee2-41566ee5680c','2022-03-04 17:30:33',200,6,'81ab7e31-26ee-4e37-af14-7fea556bc1e5','2022-03-04 17:30:33','2022-03-07 15:56:12.756581'),('683895a6-9381-4976-b2b5-720fd5812394','2022-03-09 16:07:00',200,6,'788d0c7c-d4d5-4f04-a9c9-0099c658a3ba','2022-03-09 16:51:19','2022-03-09 17:41:49.031332'),('8be518f5-7cd0-479f-a73b-22dfc23260bf','2022-02-26 18:44:35',90,8,NULL,'2022-02-26 18:44:35','2022-03-07 15:56:12.756581');
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `record_category`
--

DROP TABLE IF EXISTS `record_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `unit` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record_category`
--

LOCK TABLES `record_category` WRITE;
/*!40000 ALTER TABLE `record_category` DISABLE KEYS */;
INSERT INTO `record_category` VALUES (6,'Crabs','🥗','g'),(7,'Fast Insulin','💉','unit'),(8,'BS','🩸','mg/dl'),(9,'Correction','💉','unit'),(10,'Basal Insulin','💉','unit');
/*!40000 ALTER TABLE `record_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reset_password`
--

DROP TABLE IF EXISTS `reset_password`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reset_password` (
  `id` varchar(36) NOT NULL,
  `expired` tinyint NOT NULL DEFAULT '0',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `userId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6315a559e0b7920bdbdf142e306` (`userId`),
  CONSTRAINT `FK_6315a559e0b7920bdbdf142e306` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reset_password`
--

LOCK TABLES `reset_password` WRITE;
/*!40000 ALTER TABLE `reset_password` DISABLE KEYS */;
/*!40000 ALTER TABLE `reset_password` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `special_condition`
--

DROP TABLE IF EXISTS `special_condition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `special_condition` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `special_condition`
--

LOCK TABLES `special_condition` WRITE;
/*!40000 ALTER TABLE `special_condition` DISABLE KEYS */;
INSERT INTO `special_condition` VALUES ('4df57d96-ef11-4e80-99e7-b517946a231b','Other'),('60d04aa6-9be6-4c6e-ba70-35fbf9d95dd9','Type 1 Diabetes'),('ce700b20-d851-4d84-92b5-3d038a414a0f','Celiac Disease'),('de4aef75-852c-4411-bcb0-01cac2b783d3','Allergies and Intolerances'),('f969929a-7f07-4d8c-8947-8feb079861c6','Thyroid');
/*!40000 ALTER TABLE `special_condition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_information`
--

DROP TABLE IF EXISTS `user_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_information` (
  `id` varchar(36) NOT NULL,
  `weight` int NOT NULL,
  `height` int NOT NULL,
  `gender` varchar(255) NOT NULL,
  `bmi` int NOT NULL,
  `birth` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_information`
--

LOCK TABLES `user_information` WRITE;
/*!40000 ALTER TABLE `user_information` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `version` int NOT NULL DEFAULT '1',
  `weight` int NOT NULL,
  `height` int NOT NULL,
  `gender` varchar(255) NOT NULL,
  `bmi` int NOT NULL,
  `birth` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`),
  UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('5b6683dc-4f86-4247-8ac1-22a1910d5a9e','Brahim','berkassebrahim@gmail.com','avocado','$2b$05$4rpSpYvEMNCOgOeezWRsZORDIE5070RCTFQIhTcK11bgxEjfwBniu','2022-02-28 23:55:10.378789',1,65,180,'MALE',1703,'2000-04-09 00:00:00'),('788d0c7c-d4d5-4f04-a9c9-0099c658a3ba','User test','testuser@gmail.com','user','$2b$05$3QnaxCY0otZDwvEMJXqmvuX/BJMyKnewf1w0FoxcxoIN1I/9ivIA6','2022-03-09 16:37:44.237514',1,70,180,'MALE',1770,'2000-04-09 00:00:00'),('81ab7e31-26ee-4e37-af14-7fea556bc1e5','Ayoub','ayoub@gmail.com','ayoub','$2b$05$QZ1ogAOwDbu1bSIkCglmrenvsJaEUUmQ6D/DmcSvKD/d0NDQYKa9q','2022-03-01 22:18:38.912078',1,75,184,'MALE',1856,'2000-04-09 00:00:00'),('e3f2d409-686d-455f-9a2d-05d45613c0af','Brahim Berkasse','ber@gmail.com','avocados','$2b$05$zG.Y9/WMqwAqM.kWrZToieEA.AhiEgKSveRxAGuICzbvs0dsuYDb2','2022-03-01 16:33:08.528924',1,70,183,'MALE',1785,'2000-04-09 00:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_specialconditions_special_condition`
--

DROP TABLE IF EXISTS `users_specialconditions_special_condition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_specialconditions_special_condition` (
  `usersId` varchar(36) NOT NULL,
  `specialConditionId` varchar(36) NOT NULL,
  PRIMARY KEY (`usersId`,`specialConditionId`),
  KEY `IDX_3405a0e9ca7efda67eccb80534` (`usersId`),
  KEY `IDX_f8970fa0f6e3df1a523fab63a8` (`specialConditionId`),
  CONSTRAINT `FK_3405a0e9ca7efda67eccb805341` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_f8970fa0f6e3df1a523fab63a8a` FOREIGN KEY (`specialConditionId`) REFERENCES `special_condition` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_specialconditions_special_condition`
--

LOCK TABLES `users_specialconditions_special_condition` WRITE;
/*!40000 ALTER TABLE `users_specialconditions_special_condition` DISABLE KEYS */;
INSERT INTO `users_specialconditions_special_condition` VALUES ('5b6683dc-4f86-4247-8ac1-22a1910d5a9e','60d04aa6-9be6-4c6e-ba70-35fbf9d95dd9'),('5b6683dc-4f86-4247-8ac1-22a1910d5a9e','f969929a-7f07-4d8c-8947-8feb079861c6'),('788d0c7c-d4d5-4f04-a9c9-0099c658a3ba','60d04aa6-9be6-4c6e-ba70-35fbf9d95dd9'),('788d0c7c-d4d5-4f04-a9c9-0099c658a3ba','de4aef75-852c-4411-bcb0-01cac2b783d3'),('788d0c7c-d4d5-4f04-a9c9-0099c658a3ba','f969929a-7f07-4d8c-8947-8feb079861c6'),('81ab7e31-26ee-4e37-af14-7fea556bc1e5','4df57d96-ef11-4e80-99e7-b517946a231b'),('e3f2d409-686d-455f-9a2d-05d45613c0af','60d04aa6-9be6-4c6e-ba70-35fbf9d95dd9'),('e3f2d409-686d-455f-9a2d-05d45613c0af','f969929a-7f07-4d8c-8947-8feb079861c6');
/*!40000 ALTER TABLE `users_specialconditions_special_condition` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-11  0:18:11
