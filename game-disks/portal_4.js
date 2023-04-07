const portal_4 = () => ({
    rooms: [
        {
            id: 'portal_4', // unique ID for this room
            name: 'Portal 4', // room name (shown when player enters the room)
            // room description (shown when player first enters the room)
            desc: `Portal 4's room. It is rather empty except for an orb floating in the middle of the room.`,
            onLook: () => {
                const room = getRoom('portal_4');
                room.desc = `As you walk in you are greeted with a faint light. Almost mesmerizing, but when you take a closer it appears to be William.
         The room around you is dimly lit, but the orb seems to fill the space with a comforting radiance.`;
            },
            items: [
                {
                    name: ['floating orb', 'orb'], // player can refer to this item by any of these names
                    desc: `Your eyes are drawn to a large, shimmering orb hovering in mid-air, its surface pulsing with a warm, golden light. 
          The room around you is dimly lit, but the orb seems to fill the space with a comforting radiance.`, // description shown when player looks at the item
                    block: `It's far too large for you to carry.`, // optional reason player cannot pick up this item
                }
            ],
            // places the player can go from this room
            exits: [
                // GO GLADE command leads back to the Glade
                { dir: 'glade', id: 'glade' },
            ],
        }
    ],
});