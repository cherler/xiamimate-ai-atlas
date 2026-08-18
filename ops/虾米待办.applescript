-- 「虾米待办」通知器。**存在的唯一理由：让通知点得动。**
--
-- osascript 发出的通知归属于「脚本编辑器」，点一下只会启动脚本编辑器
-- （然后弹出它的打开文件对话框 —— 负责人 2026-08-14 截图问「什么意思」，就是这个）。
-- 通知的归属只能是**发出它的那个 app**，所以把发送方做成一个 app 包：
--   · 带参数运行 = 发通知
--   · 不带参数运行（= 用户点了通知）= 把审阅台拉起来并打开
--
-- ⚠️⚠️ **2026-08-18 修的老 bug：点通知这一路从来就没跑通过。**
--
-- 原来第一句是 `if (count of argv) is 0 then`。用 `osascript` 跑没问题，
-- 但 LaunchServices 启动 app 时（双击、点通知，都走这条）**根本不传那个参数**，
-- `count of argv` 当场抛 -1708「"count" 不能继续」，applet 一秒内退出。
-- 也就是说：通知点下去什么都不会发生 —— 而它看起来只是「点了没反应」，
-- 不报错、不留日志，所以躺了很久没人发现。
--
-- 2026-08-18 起落点从 data/TODO.md 改成审阅台：负责人定了
-- 「所有的操作，我只从本地审阅台一个地方处理」，落到一个只能看的文本文件上不算数。
--
-- 为什么不干脆让审阅台开机自启：2026-08-15 拍过板「保持手动就好」——
-- 它能写 atlas.json 并直接提交 git，常驻后台风险和收益不成正比。
-- 那条决定不推翻，改成**点的时候现拉起来**：既是一键，又不常驻。
--
-- 改完必须**用 `open` 启动 app 实测一次**，不能只 `osascript` 跑脚本 ——
-- 上面那个 bug 正是只在 `open` 这条路上才出现的。
on run argv
	set repoDir to "/Users/liuzhenhai/projects/xiamimate/xiamimate-ai-atlas"
	set station to "http://127.0.0.1:8230/"

	-- argv 在 LaunchServices 那条路上不是 list，先探一次类型再数
	set argc to 0
	try
		if class of argv is list then set argc to count of argv
	end try

	if argc is 0 then
		set isUp to false
		try
			-- 已经开着就别再起一个 —— 第二个进程会撞端口然后自己死掉，
			-- 而用户看到的只是「点了没反应」。
			do shell script "/usr/bin/curl -s -o /dev/null -m 2 " & quoted form of station
			set isUp to true
		end try
		if not isUp then
			-- ⚠️ **必须是「launchd 代跑」，不能自己 fork 一个后台进程。**
			-- 试过 `(node ... >> log 2>&1 </dev/null &)`：`osascript` 手跑时好用，
			-- 但 app 一退出，LaunchServices 把整个进程组一起收走，审阅台跟着没。
			-- 交给 launchd 起，进程就不再挂在这个 app 底下。
			do shell script "/bin/launchctl kickstart gui/$(/usr/bin/id -u)/com.xiamimate.atlas-station"
			delay 2
		end if
		do shell script "/usr/bin/open " & quoted form of station
	else
		set theTitle to item 1 of argv
		set theBody to item 2 of argv
		display notification theBody with title theTitle subtitle "点一下打开审阅台"
	end if
end run
