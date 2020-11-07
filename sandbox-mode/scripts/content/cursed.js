Events.on(ClientLoadEvent, b => {
    Vars.ui.showCustomConfirm(
        "[]Enable [red]Sandbox[] Mode?[]","[red]Sandbox Mode[] makes you sandbox when you launch to an sector you havent launched into yet.[]",
        "Hell NO!",
        "Yes",
        ()=>{
            print("[red]Sandbox mode disabled[]"
        )},
        ()=>{
            Events.on(WorldLoadEvent, e => {Vars.state.rules.infiniteResources = true});
        });
});
