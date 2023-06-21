import org.junit.jupiter.api.BeforeAll;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestCases {
    protected static WebDriver driver;
    private static String baseUrl;

    public static void main(String[] args) throws InterruptedException {
        setUp();
        RegistrationTest();
        // LoginTest();
        // CreatePostTest();
        // EditPostTest();
        // RedirectTest();
        tearDown();
    }

    @BeforeAll
    public static void setUp() {
        driver = new ChromeDriver();
        baseUrl = "http://localhost:4200/homepage";
        driver.get(baseUrl);
    }

    public static void tearDown() {
        driver.quit();
    }

    public static void RegistrationTest() throws InterruptedException {
        driver.manage().window().maximize();
        driver.get(baseUrl);
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/app-navbar/nav/div/div[2]")).click();
        Thread.sleep(2500);
        driver.findElement(By.xpath("/html/body/app-root/body/app-navbar/nav/div/div[2]/div/ul/li[2]")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-registration/div/section/div/div/div/div/div/div[1]/div/form/div[1]/input"))
                .sendKeys("TestUser");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-registration/div/section/div/div/div/div/div/div[1]/div/form/div[2]/input"))
                .sendKeys("testuser@hotmail.com");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-registration/div/section/div/div/div/div/div/div[1]/div/form/div[3]/input"))
                .sendKeys("TestUser1233");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-registration/div/section/div/div/div/div/div/div[1]/div/form/div[4]/input")).sendKeys("TestUser1233");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-registration/div/section/div/div/div/div/div/div[1]/div/form/button")).click();
        Thread.sleep(1000);
    }

    public static void LoginTest() throws InterruptedException {
        driver.manage().window().maximize();
        driver.get(baseUrl);
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/app-navbar/nav/div/div[2]")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/app-navbar/nav/div/div[2]/div/ul/li[1]")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-login/div/section/div/div/div/div/div/div[1]/div/form/div[1]/input")).sendKeys("testuser@hotmail.com");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-login/div/section/div/div/div/div/div/div[1]/div/form/div[2]/input")).sendKeys("TestUser1233");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-login/div/section/div/div/div/div/div/div[1]/div/form/div[3]/button")).click();
        Thread.sleep(1000);
    }

    public static void CreatePostTest() throws InterruptedException {
        driver.manage().window().maximize();
        driver.get(baseUrl);
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/app-navbar/nav/div/div[2]")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/app-navbar/nav/div/div[2]/div/ul/li[1]")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-login/div/section/div/div/div/div/div/div[1]/div/form/div[1]/input")).sendKeys("testuser@hotmail.com");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-login/div/section/div/div/div/div/div/div[1]/div/form/div[2]/input")).sendKeys("TestUser1233");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-login/div/section/div/div/div/div/div/div[1]/div/form/div[3]/button")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-homepage/div/div[1]/button[2]")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-add-post/form/div/div/textarea[1]")).sendKeys("Test");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-add-post/form/div/div/textarea[2]")).sendKeys("Test");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-add-post/form/div/div/textarea[3]")).sendKeys("Test");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-add-post/form/button")).click();
        Thread.sleep(1000);
    }

    public static void EditPostTest() throws InterruptedException {
        driver.manage().window().maximize();
        driver.get(baseUrl);
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/app-navbar/nav/div/div[2]")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/app-navbar/nav/div/div[2]/div/ul/li[1]")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-login/div/section/div/div/div/div/div/div[1]/div/form/div[1]/input")).sendKeys("testuser@hotmail.com");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-login/div/section/div/div/div/div/div/div[1]/div/form/div[2]/input")).sendKeys("TestUser1233");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-login/div/section/div/div/div/div/div/div[1]/div/form/div[3]/button")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/div/app-homepage/div/div[2]/div/a/app-blog-post/div/a[12]/div/div/div[2]/button[1]")).click(); // This is a changed value , please when post is added change it to value needed for the post. 
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/ngb-modal-window/div/div/div/div/div/div[2]/form/div[2]/textarea")).sendKeys("New Test");
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/ngb-modal-window/div/div/div/div/div/div[2]/form/div[4]/button")).click();
        Thread.sleep(1000);
    }

    public static void RedirectTest() throws InterruptedException {
        driver.manage().window().maximize();
        driver.get(baseUrl);
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/app-navbar/nav/div/div[1]/ul/li[2]")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/app-navbar/nav/div/div[1]/ul/li[3]")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/app-navbar/nav/div/div[1]/ul/li[4]")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/body/app-navbar/nav/div/div[1]/ul/li[1]")).click();
        Thread.sleep(1000);
    }
}
