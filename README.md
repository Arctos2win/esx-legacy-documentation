## Local Development

First, run `pnpm i` to install the dependencies.

Install "next-themes" dependecy with `pnpm i next-themes`

Then, run `pnpm dev` to start the development server and visit localhost:3000.

# **CLIENT SIDE**

- [ ] Function name and parameters: ESX.ShowNotification(message, type, length) *rename args*
- [x] Function name and parameters: ESX.IsPlayerLoaded()
- [ ] Function name and parameters: ESX.GetPlayerData() *miss example*
- [x] Function name and parameters: ESX.SearchInventory(items, count)
- [x] Function name and parameters: ESX.SetPlayerData(key, val)
- [x] Function name and parameters: ESX.Progressbar(message, length, Options)
~~- [ ] Function name and parameters: ESX.ShowNotification(message, type, length)~~ *duplicate*
- [ ] Function name and parameters: ESX.TextUI(message, type)  
- [ ] Function name and parameters: ESX.HideUI() 
- [x] Function name and parameters: ESX.ShowAdvancedNotification(sender, subject, msg, textureDict, iconType, flash, saveToBrief, hudColorIndex)
- [x] Function name and parameters: ESX.ShowHelpNotification(msg, thisFrame, beep, duration)
- [x] Function name and parameters: ESX.ShowFloatingHelpNotification(msg, coords)
- [ ] Function name and parameters: ESX.UI.Menu.RegisterType(type, open, close)
- [ ] Function name and parameters: ESX.UI.Menu.Open(type, namespace, name, data, submit, cancel, change, close)
- [ ] Function name and parameters: ESX.UI.Menu.Close(type, namespace, name)
- [ ] Function name and parameters: ESX.UI.Menu.CloseAll()
- [ ] Function name and parameters: ESX.UI.Menu.GetOpened(type, namespace, name)
- [ ] Function name and parameters: ESX.UI.Menu.GetOpenedMenus()
- [ ] Function name and parameters: ESX.UI.Menu.IsOpen(type, namespace, name)
- [ ] Function name and parameters: ESX.UI.ShowInventoryItemNotification(add, item, count)
- [ ] Function name and parameters: ESX.Game.GetPedMugshot(ped, transparent) *missing arg*
- [x] Function name and parameters: ESX.Game.Teleport(entity, coords, cb) *done but to improve example*
- [ ] Function name and parameters: ESX.Game.SpawnObject(object, coords, cb, networked) *miss arg and example to be improved*
- [x] Function name and parameters: ESX.Game.SpawnLocalObject(object, coords, cb) *done but to improve example*
- [x] Function name and parameters: ESX.Game.DeleteVehicle(vehicle)
- [x] Function name and parameters: ESX.Game.DeleteObject(object)
- [ ] Function name and parameters: ESX.Game.SpawnVehicle(vehicleModel, coords, heading, cb, networked) *miss arg improve example*
- [x] Function name and parameters: ESX.Game.SpawnLocalVehicle(vehicle, coords, heading, cb) *done but improve example*
- [x] Function name and parameters: ESX.Game.IsVehicleEmpty(vehicle)
- [ ] Function name and parameters: ESX.Game.GetObjects() *miss example*
- [ ] Function name and parameters: ESX.Game.GetPeds(onlyOtherPeds) *miss example*
- [ ] Function name and parameters: ESX.Game.GetVehicles() *miss example*
- [x] Function name and parameters: ESX.Game.GetPlayers(onlyOtherPlayers, returnKeyValue, returnPeds)
- [x] Function name and parameters: ESX.Game.GetClosestObject(coords, modelFilter)
- [ ] Function name and parameters: ESX.Game.GetClosestPed(coords, modelFilter) *miss example*
- [x] Function name and parameters: ESX.Game.GetClosestPlayer(coords)
- [ ] Function name and parameters: ESX.Game.GetClosestVehicle(coords, modelFilter) *miss example*
- [ ] Function name and parameters: ESX.Game.GetPlayersInArea(coords, maxDistance) *miss example*
- [ ] Function name and parameters: ESX.Game.GetVehiclesInArea(coords, maxDistance) *miss example*
- [ ] Function name and parameters: ESX.Game.IsSpawnPointClear(coords, maxDistance) *miss example*
- [ ] Function name and parameters: ESX.Game.GetClosestEntity(entities, isPlayerEntities, coords, modelFilter)*WAIT FOR PAPA FOR THIS*
- [x] Function name and parameters: ESX.Game.GetVehicleInDirection() *done but improve example?*
- [ ] Function name and parameters: ESX.Game.GetVehicleProperties(vehicle) *miss example and to check the returned table*
- [x] Function name and parameters: ESX.Game.SetVehicleProperties(vehicle, props) *check table content*
- [x] Function name and parameters: ESX.Game.Utils.DrawText3D(coords, text, size, font) *improve style*
- [ ] Function name and parameters: ESX.GetAccount(account)
- [ ] Function name and parameters: ESX.GetVehicleType(model)
- [x] Function name and parameters: ESX.Scaleform.ShowFreemodeMessage(title, msg, sec)
- [ ] Function name and parameters: ESX.Scaleform.ShowBreakingNews(title, msg, bottom, sec) *miss example*
- [ ] Function name and parameters: ESX.Scaleform.ShowPopupWarning(title, msg, bottom, sec) *miss example*
- [ ] Function name and parameters: ESX.Scaleform.ShowTrafficMovie(sec) *miss example*
- [x] Function name and parameters: ESX.Scaleform.Utils.RequestScaleformMovie(movie) *to improve example*
- [ ] Function name and parameters: ESX.Streaming.RequestModel(modelHash, cb) *miss example*
- [ ] Function name and parameters: ESX.Streaming.RequestStreamedTextureDict(textureDict, cb) *improve description miss example*
- [ ] Function name and parameters: ESX.Streaming.RequestNamedPtfxAsset(assetName, cb) *miss description and example*
- [ ] Function name and parameters: ESX.Streaming.RequestAnimSet(animSet, cb) *improve description miss example*
- [ ] Function name and parameters: ESX.Streaming.RequestAnimDict(animDict, cb) * improve description miss example*
- [ ] Function name and parameters: ESX.Streaming.RequestWeaponAsset(weaponHash, cb) *miss description and example*
- [ ] Function name and parameters: ESX.Math.Round(value, numDecimalPlaces)
- [ ] Function name and parameters: ESX.Math.GroupDigits(value)
- [ ] Function name and parameters: ESX.Math.Trim(value)
- [ ] Function name and parameters: ESX.Table.SizeOf(t)
- [ ] Function name and parameters: ESX.Table.Set(t)
- [ ] Function name and parameters: ESX.Table.IndexOf(t, value)
- [ ] Function name and parameters: ESX.Table.LastIndexOf(t, value)
- [ ] Function name and parameters: ESX.Table.Find(t, cb)
- [ ] Function name and parameters: ESX.Table.FindIndex(t, cb)
- [ ] Function name and parameters: ESX.Table.Filter(t, cb)
- [ ] Function name and parameters: ESX.Table.Map(t, cb)
- [ ] Function name and parameters: ESX.Table.Reverse(t)
- [ ] Function name and parameters: ESX.Table.Clone(t)
- [ ] Function name and parameters: ESX.Table.Concat(t1, t2)
- [ ] Function name and parameters: ESX.Table.Join(t, sep)
- [ ] Function name and parameters: ESX.Table.TableContains(tab, val)
- [ ] Function name and parameters: ESX.Table.Sort(t, order)
- [ ] Function name and parameters: ESX.GetRandomString(length)
- [ ] Function name and parameters: ESX.GetConfig()
- [ ] Function name and parameters: ESX.GetWeapon(weaponName)
- [ ] Function name and parameters: ESX.GetWeaponFromHash(weaponHash)
- [ ] Function name and parameters: ESX.GetWeaponList(byHash)
- [ ] Function name and parameters: ESX.GetWeaponLabel(weaponName)
- [ ] Function name and parameters: ESX.GetWeaponComponent(weaponName, weaponComponent)
- [ ] Function name and parameters: ESX.DumpTable(table, nb)
- [ ] Function name and parameters: ESX.Round(value, numDecimalPlaces)

# SERVER SIDE

- [ ] Function name and parameters: ESX.Trace(msg)
- [ ] Function name and parameters: ESX.GetExtendedPlayers(key, val)
- [ ] Function name and parameters: ESX.GetPlayerFromId(source)
- [ ] Function name and parameters: ESX.GetPlayerFromIdentifier(identifier)
- [ ] Function name and parameters: ESX.GetIdentifier(playerId)
- [ ] Function name and parameters: ESX.GetVehicleType(model, player, cb)
- [ ] Function name and parameters: ESX.DiscordLog(name, title, color, message)
- [ ] Function name and parameters: ESX.DiscordLogFields(name, title, color, fields)
- [ ] Function name and parameters: ESX.RefreshJobs()
- [ ] Function name and parameters: ESX.RegisterUsableItem(item, cb)
- [ ] Function name and parameters: ESX.UseItem(source, item, ...)
- [ ] Function name and parameters: ESX.RegisterPlayerFunctionOverrides(index, overrides)
- [ ] Function name and parameters: ESX.SetPlayerFunctionOverride(index)
- [ ] Function name and parameters: ESX.GetItemLabel(item)
- [ ] Function name and parameters: ESX.GetJobs()
- [ ] Function name and parameters: ESX.GetUsableItems()
- [ ] Function name and parameters: ESX.DoesJobExist(job, grade)
- [ ] Function name and parameters: Core.IsPlayerAdmin(playerId)
- [ ] Function name and parameters: ESX.OneSync.GetPlayersInArea(source, maxDistance, ignore)
- [ ] Function name and parameters: ESX.OneSync.GetClosestPlayer(source, maxDistance, ignore)
- [ ] Function name and parameters: ESX.OneSync.SpawnVehicle(model, coords, heading, properties, cb)
- [ ] Function name and parameters: ESX.OneSync.SpawnObject(model, coords, heading, cb)
- [ ] Function name and parameters: ESX.OneSync.SpawnPed(model, coords, heading, cb)
- [ ] Function name and parameters: ESX.OneSync.SpawnPedInVehicle(model, vehicle, seat, cb)
- [ ] Function name and parameters: ESX.OneSync.GetPedsInArea(coords, maxDistance, modelFilter)
- [ ] Function name and parameters: ESX.OneSync.GetObjectsInArea(coords, maxDistance, modelFilter)
- [ ] Function name and parameters: ESX.OneSync.GetVehiclesInArea(coords, maxDistance, modelFilter)
- [ ] Function name and parameters: ESX.OneSync.GetClosestPed(coords, modelFilter)
- [ ] Function name and parameters: ESX.OneSync.GetClosestObject(coords, modelFilter)
- [ ] Function name and parameters: ESX.OneSync.GetClosestVehicle(coords, modelFilter)

