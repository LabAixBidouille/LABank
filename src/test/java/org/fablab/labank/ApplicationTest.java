package org.fablab.labank;

//import org.fablab.labank.mock.MockUsers;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Application test
 * Created by kprim on 02/01/2017.
 */
@SpringBootApplication
public class ApplicationTest {

    public static void main(String[] args) {
        //MockUsers.mock();
        SpringApplication.run(Application.class, args);
    }
}
