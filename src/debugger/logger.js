export default function Logger(container, socket) {

    socket.on('console', function(data) {

        container.add({
            type: data.type,
            items: data.args
        });

    });

};