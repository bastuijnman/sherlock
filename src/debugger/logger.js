export default function Logger(container, socket) {

    socket.on('console.log', function(data) {

        for(var item in data) {
            container.add({
                line: data[item]
            });
        }

    });

};