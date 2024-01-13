-- Define a function that will handle the train's waypoint changes.
function waypointHandler(groupName, waypointNumber)
    if waypointNumber >= 1 and waypointNumber <= 5 then
        trigger.action.outText(groupName .. " has reached waypoint " .. waypointNumber, 10)
    end
end

-- The name of your train group in the mission editor.
local trainGroupName = "TrainGroup-1"

-- Global event handler
local eventHandler = {}

function eventHandler:onEvent(event)
    if event.id == world.event.S_EVENT_WAYPOINT_CHANGE then
        local initiator = event.initiator
        if initiator and initiator:getGroup():getName() == trainGroupName then
            waypointHandler(trainGroupName, event.waypointIndex)
        end
    end
end

-- Register the event handler
world.addEventHandler(eventHandler)
trigger.action.outText("Waypoint change script loaded for " .. trainGroupName, 10)


/*-- Define a function that will handle the train's waypoint changes.
function waypointHandler(groupName, waypointNumber)
    -- Debug message to confirm the function is called
    trigger.action.outText("waypointHandler called for " .. groupName .. " at waypoint " .. tostring(waypointNumber), 10)
    if waypointNumber >= 1 and waypointNumber <= 5 then
        trigger.action.outText(groupName .. " has reached waypoint " .. waypointNumber, 10)
    else
        trigger.action.outText(groupName .. " has reached an unexpected waypoint: " .. tostring(waypointNumber), 10)
    end
end

-- The name of your train group in the mission editor.
local trainGroupName = "TrainGroup"

-- Global event handler
local eventHandler = {}

function eventHandler:onEvent(event)
    -- Debug message to confirm the event triggering
    trigger.action.outText("Event triggered: " .. tostring(event.id), 10)
    if event.id == world.event.S_EVENT_WAYPOINT_CHANGE then
        local initiator = event.initiator
        if initiator and initiator:getGroup() and initiator:getGroup():getName() == trainGroupName then
            local waypointIndex = event.waypointIndex -- This assumes waypointIndex is the correct property
            waypointHandler(trainGroupName, waypointIndex)
        end
    end
end

-- Register the event handler
world.addEventHandler(eventHandler)

-- Debug message to confirm script is running
trigger.action.outText("Waypoint change script loaded for " .. trainGroupName, 10)